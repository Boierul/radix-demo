import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import TurbinesHome from "./pages/Turbines/TurbinesHome.jsx";
import Map from "./components/Maps/Map.jsx";
import ProjectsHome from "./pages/Projects/ProjectsHome.jsx";
import Custom404 from "./pages/404/Custom404.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsHome/>}/>
            <Route path="/turbines" element={<TurbinesHome projectName="Project-01"/>}/>
            <Route path="/*" element={<Custom404 />} />

            <Route path="/demo" element={<Map/>}/>
        </Routes>
    )
}

export default App
