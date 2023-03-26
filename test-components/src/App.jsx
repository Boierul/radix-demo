import './App.scss'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ProjectsHome from "./pages/Projects/ProjectsHome.jsx";
import Custom404 from "./pages/404/Custom404.jsx";
import TurbineHomeWrapper from "./pages/Turbines/Wrappers/TurbineHomeWrapper.jsx";
import ProjectDetailWrapper from "./pages/Projects/Wrappers/ProjectDetailWrapper.jsx";
import UnderConstructionPage from "./pages/Misc/UnderConstruction/UnderConstructionPage.jsx";
import TurbineDetailPageWrapper from "./pages/Turbines/Wrappers/TurbineDetailPageWrapper.jsx";
import PulsatingCircle from "./components/PulsatingCircle/PulsatingCircle.jsx";
import TurbinesAll from "./pages/Turbines/TurbinesAll/TurbinesAll.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsHome/>}/>
            <Route path="/projects/:projectId" element={<ProjectDetailWrapper/>}/>
            <Route path="/projects/:projectId/turbines" element={<TurbineHomeWrapper/>}/>
            <Route path="/projects/:projectId/turbines/:turbineId" element={<TurbineDetailPageWrapper/>}/>
            <Route path="/projects/:projectId/turbinesAll" element={<TurbinesAll/>}/>
            <Route path="/construction" element={<UnderConstructionPage/>}/>
            <Route path="/*" element={<Custom404/>}/>

            <Route path="/demo" element={<div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <PulsatingCircle/>
            </div>}/>
        </Routes>
    )
}

export default App
