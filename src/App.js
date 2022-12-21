import './App.css';
import BtsNavbar from "./components/navbar";
import MyPageFooter from "./components/footer";
import Contact from "./pages/contact.js";
import ApiPlayground from "./pages/apiPlayground";
import {Route, Routes} from 'react-router-dom';
import NasaPhoto from "./pages/NasaPhoto";
// import {Link} from "react-router-dom";

function App() {
    return (<>
            <div className="App">
                <BtsNavbar></BtsNavbar>
                <Routes>
                    <Route path="/"></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/apiPlayground" element={<ApiPlayground/>}></Route>
                    <Route path="/NasaPhoto" element={<NasaPhoto/>}></Route>
                </Routes>
                {/*<Link className="home-link link-primary nav-link" to="/NasaPhoto">view the daily NASA image</Link>*/}
                {/*<h1>hello</h1>*/}
                {/*<NasaPhoto/>*/}
                <MyPageFooter></MyPageFooter>
            </div>
        </>

    );
}

export default App;
