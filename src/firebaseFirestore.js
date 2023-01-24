import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey:`${process.env.REACT_APP_API_KEY_FIREBASE}`,
    authDomain:`${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: 'my-portfolio-react-f1cc2',
    storageBucket:`${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId:`${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId:`${process.env.REACT_APP_APP_ID}`
};


firebase.initializeApp(firebaseConfig)
export default firebase