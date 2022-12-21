// import BtsNavbar from "../components/navbar";
import {Modal} from "react-bootstrap";
import {useState} from "react";


function ApiPlayground() {
    const [show, setShow] = useState(false); // two constants used to set state and update the modal visibility toggle function

    const closeApiModal = () => setShow(false); // when called with button, closes modal
    const openApiModal = () => setShow(true); //when called with onpressed will open the modal

    return (<>
            {/*<BtsNavbar></BtsNavbar>*/}

            <section className="container-fluid ModalBody">
                <div className="ModalFunctions pt-5">
                    <button className="btn btn-dark btn-lg" onClick={openApiModal}>Check out the NASA API</button>
                    {/*    Modal Body*/}
                    <Modal show={show} onHide={closeApiModal}>
                        <Modal.Header>
                            <Modal.Title>
                                <p className="display-4">NASA API</p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="APIBody"><p>hello</p></div>
                        </Modal.Body>
                    </Modal>
                </div>
            </section>
        </>)
}

export default ApiPlayground;