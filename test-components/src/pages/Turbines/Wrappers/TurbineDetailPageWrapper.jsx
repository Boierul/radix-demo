import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Custom404 from "../../404/Custom404.jsx";
import TurbineDetailPage from "../TurbineDetailPage/TurbineDetailPage.jsx";

import projects from "../../../utils/customJSON/projectsUpdated.json";
import {setTurbineName} from "../../../store/slices/demoSlice.js";
import {useDispatch} from "react-redux";

function TurbineDetailPageWrapper() {
    const {projectId} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);
    const [projectName, setProjectName] = useState('');

    const dispatch = useDispatch();
    const storedTurbineName = localStorage.getItem('turbineName')
    const storedProjectId = localStorage.getItem('projectID')

    // Checks if the project ID is in the projects array and sets the allowedProjectNames
    useEffect(() => {
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
    }, []);

    // Checks if the turbine name is in local storage and sets the turbine name
    useEffect(() => {
        // Get the turbine name from local storage
        if (storedTurbineName) {
            dispatch(setTurbineName(storedTurbineName))
        }
    }, [])

    useEffect(() => {
        // Checks if the project ID is in the projects array and sets the project name
        projects.map((project) => {
            {
                if (project.Project_ID === projectId) {
                    setProjectName(project.Project_Name);
                }
            }
        })
    }, []);

    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(projectId)) {
        // Render 404 page  - Set timeout to render the 404 page after 1 second, for users not to see the page flickering
        return (setTimeout(() => {
            return <Custom404/>
        }, 500));
    }

    return <TurbineDetailPage projectId={projectId} projectName={projectName} storedTurbineName={storedTurbineName}/>;
}

export default TurbineDetailPageWrapper;