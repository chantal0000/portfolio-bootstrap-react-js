//App.js

import './App.css';
import BtsNavbar from "./components/navbar";
import MyPageFooter from "./components/footer";
import Contact from "./pages/contact.js";
import ApiPlayground from "./pages/apiPlayground";
import {Route, Routes} from 'react-router-dom';
// import ApiPlayground from "./pages/apiPlayground";

// import Home from "./index";

function App() {
    return (<>
            <div className="App">
            <BtsNavbar></BtsNavbar>
            <Routes>
                <Route path="/"></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/apiPlayground" element={<ApiPlayground/>}></Route>
            </Routes>

                {/*<h1>hello</h1>*/}
                <MyPageFooter></MyPageFooter>
            </div>
        </>

    );
}

export default App;
