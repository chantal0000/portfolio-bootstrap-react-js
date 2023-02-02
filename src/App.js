import './App.css';
import BtsNavbar from "./components/navbar";
import MyPageFooter from "./components/footer";
import ContactMe from "./pages/contact2.js";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/homepage"
import About from "./pages/about"
function App() {
    return (<>
            <div className="App">
                <BtsNavbar></BtsNavbar>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/contact" element={<ContactMe/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Routes>
                <MyPageFooter></MyPageFooter>
            </div>
        </>

    );
}

export default App;
