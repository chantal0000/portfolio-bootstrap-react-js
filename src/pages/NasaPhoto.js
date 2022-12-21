/* ! In order for this file to work, we need the following sections /
/ ? Image Url - Image Title - Image Desc - Image Date/
/? import UseState and UseEffect for toggling and fetching the Data and build the Html to display the image with basic html tags*/

import React, {useEffect, useState} from "react";


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    // const photoData = useState(null); // fetching NASA image source to view the image
    // const setPhotoData = useState(null); //fetching the title of image in case of broken link
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

    return (

        <div className="nasa-photo">
            <img src={photoData.url} alt={photoData.title} className="photo"/>

            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p> {/*fetching image date*/}

                <p className="description">{photoData.explanation}</p> {/*NASA image Description*/}
            </div>
        </div>

    )
}

// export default NasaPhoto;