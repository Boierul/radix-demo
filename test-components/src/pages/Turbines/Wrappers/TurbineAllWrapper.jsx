import React, {useEffect, useState} from 'react';
import projects from "../../../utils/customJSON/projectsUpdated.json";
import Custom404 from "../../404/Custom404.jsx";
import TurbinesHome from "../TurbinesHome.jsx";
import TurbinesAll from "../TurbinesAll/TurbinesAll.jsx";

function TurbineAllWrapper(props) {
    const storedProjectName = localStorage.getItem('projectName')
    // const storedTurbineName = localStorage.getItem('turbineName')

    const storedProjectId = localStorage.getItem('projectID')
    const [turbineList, setTurbineList] = useState([]);
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);

    useEffect(() => {
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
    }, []);

    useEffect(() => {
        // Checks if the project ID is in the projects array and sets the project name
        projects.map((project) => {
            {
                if (project.Project_ID === storedProjectId) {
                    setTurbineList(project.Turbines)
                }
            }
        })
    }, []);


    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(storedProjectId)) {
        // Render 404 page  - Set timeout to render the 404 page after 1 second, for users not to see the page flickering
        return (setTimeout(() => {
            return <Custom404/>
        }, 500));
    }

    return <TurbinesAll turbineList={turbineList} storedProjectName={storedProjectName} storedProjectId={storedProjectId}/>;
}

export default TurbineAllWrapper;