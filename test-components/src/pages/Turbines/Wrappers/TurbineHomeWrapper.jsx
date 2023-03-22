import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TurbinesHome from "../TurbinesHome.jsx";
import Custom404 from "../../404/Custom404.jsx";
import projects from "../../../utils/customJSON/projectsUpdated.json";

function TurbineHomeWrapper() {
    const {projectId} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [turbineList, setTurbineList] = useState([]);

    useEffect(() => {
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
    }, []);

    useEffect(() => {
        // Checks if the project ID is in the projects array and sets the project name
        projects.map((project) => {
            {
                if (project.Project_ID === projectId) {
                    setProjectName(project.Project_Name);
                    setTurbineList(project.Turbines)
                    console.log(project.Turbines)
                }
            }
        })
    }, []);


    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(projectId)) {
        // Render 404 page
        return <Custom404/>;
    }

    return <TurbinesHome projectId={projectId} projectName={projectName} turbineList={turbineList}/>;
}

export default TurbineHomeWrapper;