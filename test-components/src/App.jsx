import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Demo from "./components/Containers/Demo/Demo.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/demo" element={<Demo/>}/>
        </Routes>
    )
}

export default App
