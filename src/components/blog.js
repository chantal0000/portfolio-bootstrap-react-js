// import app from "../firebase.config";
import React, {useEffect, useState} from "react";
import firebase from "../firebaseFirestore"

function Blog() {
    const ref = firebase.firestore().collection("Blogs");
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    function getData() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setData(items)
            setLoader(false)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="Blogs">
            <h1>firebase data</h1>
            {loader === false && (data.map((dev) => (
                <div key={dev.id}>
                    <h1>title: {dev.title}</h1>
                    <p>body: {dev.body}</p>
                </div>
            )))}
        </div>

    )
}

export default Blog;