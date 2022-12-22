// import BtsNavbar from "../components/navbar";
import {Modal} from "react-bootstrap";
import {useState, useEffect} from "react";


function ApiPlayground() {
    const [show, setShow] = useState(false); // two constants used to set state and update the modal visibility toggle function
    // --------------------------
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

// ? fetchImageFromApod is a function that will fetch the data from the API and set the state of the data
        async function fetchPhoto() {
            const MY_API_KEY = process.env.REACT_APP_API_KEY;
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${MY_API_KEY}`
            )
            const data = await response.json();
            setPhotoData(data);
        }
    }, []);
    if (!photoData) return <div/>; // if there is no data, return an empty div
    // --------------------------


    const closeApiModal = () => setShow(false); // when called with button, closes modal
    const openApiModal = () => setShow(true); //when called with onpressed will open the modal

    return (<>
        <section className="container-fluid ModalBody">
            <div className="ModalFunctions pt-5">
                <button className="btn btn-dark btn-lg" onClick={openApiModal}>Check out the NASA API</button>
                {/*    Modal Body*/}
                <Modal show={show} onHide={closeApiModal}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className="APIHeader">
                                <h5 className="date text-muted">Photo of the
                                    day: {photoData.date}</h5> {/*fetching image date*/}
                                <p>{photoData.title}</p>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="APIBody">
                            <img src={photoData.url} alt={photoData.title} className="photo img-fluid"/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="APIFooter">
                            <p className="description text-center">{photoData.explanation}</p> {/*NASA image Description*/}
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    </>)
}

export default ApiPlayground;