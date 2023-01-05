import './App.css';
import BtsNavbar from "./components/navbar";
import MyPageFooter from "./components/footer";
import Contact from "./pages/contact.js";
import ApiPlayground from "./pages/apiPlayground";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/homepage"
function App() {
    return (<>
            <div className="App">
                <BtsNavbar></BtsNavbar>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/apiPlayground" element={<ApiPlayground/>}></Route>
                </Routes>
                <MyPageFooter></MyPageFooter>
            </div>
        </>

    );
}

export default App;
