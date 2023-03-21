import './App.css'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ProjectsHome from "./pages/Projects/ProjectsHome.jsx";
import Custom404 from "./pages/404/Custom404.jsx";
import TurbineHomeWrapper from "./pages/Turbines/Wrappers/TurbineHomeWrapper.jsx";
import ProjectDetailWrapper from "./pages/Projects/Wrappers/ProjectDetailWrapper.jsx";
import TurbineDetailPage from "./pages/Turbines/TurbineDetailPage/TurbineDetailPage.jsx";
import UnderConstructionPage from "./pages/Misc/UnderConstruction/UnderConstructionPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsHome/>}/>
            <Route path="/projects/:projectId" element={<ProjectDetailWrapper/>}/>
            <Route path="/projects/:projectId/turbines" element={<TurbineHomeWrapper/>}/>
            <Route path="/projects/:projectId/turbines/:turbineId" element={<TurbineDetailPage/>}/>
            <Route path="/construction" element={<UnderConstructionPage/>}/>
            <Route path="/*" element={<Custom404/>}/>

        </Routes>
    )
}

export default App
