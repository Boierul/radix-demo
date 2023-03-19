import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Demo from "./components/Containers/Demo/Demo.jsx";
import PopoverDemoMK2 from "./components/Popover/PopoverDemoMK2.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/demo" element={<PopoverDemoMK2/>}/>
        </Routes>
    )
}

export default App
