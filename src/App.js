import './App.css';
import BtsNavbar from "./components/navbar";
import MyPageFooter from "./components/footer";
import Contact from "./pages/contact.js";
import APIplayground from "./pages/apiPlayground";
import {Route, Routes} from 'react-router-dom';
// import Home from "./index";

function App() {
    return (<>
            <BtsNavbar></BtsNavbar>
            <Routes>
                <Route path="/" ></Route>
                <Route path="/contact" element={Contact}></Route>
                <Route path="/apiPlayground" element={APIplayground}></Route>
            </Routes>
            <div className="App">
                <MyPageFooter></MyPageFooter>
            </div>
        </>

    );
}

export default App;
