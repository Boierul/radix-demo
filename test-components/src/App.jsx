import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Demo from "./components/Containers/Demo/Demo.jsx";
import PopoverDemoMK2 from "./components/Popover/PopoverDemoMK2.jsx";
import TurbinesHome from "./pages/Turbines/TurbinesHome.jsx";
import HeaderText from "./components/HeaderText/HeaderText.jsx";
import Map from "./components/Maps/Map.jsx";
import ProjectsHome from "./pages/Projects/ProjectsHome.jsx";
import Custom404 from "./pages/404/Custom404.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsHome/>}/>
            <Route path="/turbines" element={<TurbinesHome projectName="Project-01"/>}/>
            <Route path="/demo" element={<Map/>}/>

            <Route path="/*" element={<Custom404 />} />
        </Routes>
    )
}

export default App
