import './App.scss'
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ProjectsHome from "./pages/Projects/ProjectsHome.jsx";
import Custom404 from "./pages/404/Custom404.jsx";
import TurbineHomeWrapper from "./pages/Turbines/Wrappers/TurbineHomeWrapper.jsx";
import ProjectDetailWrapper from "./pages/Projects/Wrappers/ProjectDetailWrapper.jsx";
import UnderConstructionPage from "./pages/Misc/UnderConstruction/UnderConstructionPage.jsx";
import TurbineDetailPageWrapper from "./pages/Turbines/Wrappers/TurbineDetailPageWrapper.jsx";
import TurbineAllWrapper from "./pages/Turbines/Wrappers/TurbineAllWrapper.jsx";
import Visualise from "./pages/Visualise/Visualise.jsx";
import PulsatingCircle from "./components/PulsatingCircle/PulsatingCircle.jsx";
import LinearChart from "./components/Charts/LinearChart/LinearChart.jsx";
import PieChart from "./components/Charts/PieChart/PieChart.jsx";
import ScatterPlot from "./components/Charts/ScatterPlot/ScatterPlot.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<ProjectsHome/>}/>
            <Route path="/projects/:projectId" element={<ProjectDetailWrapper/>}/>
            <Route path="/projects/:projectId/turbines" element={<TurbineHomeWrapper/>}/>
            <Route path="/projects/:projectId/turbines/:turbineId" element={<TurbineDetailPageWrapper/>}/>
            <Route path="/projects/:projectId/turbinesAll" element={<TurbineAllWrapper/>}/>
            <Route path="/construction" element={<UnderConstructionPage/>}/>
            <Route path="/visualise" element={<Visualise/>}/>
            <Route path="/*" element={<Custom404/>}/>

            <Route path="/demo" element={
                <div style={{
                    height: "99vh",
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <ScatterPlot/>
                    {/*<PulsatingCircle/>*/}
                    {/*<ContainerData/>*/}
                </div>}/>
        </Routes>
    )
}

export default App
