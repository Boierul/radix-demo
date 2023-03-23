import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Custom404 from "../../404/Custom404.jsx";
import ProjectDetailPage from "../ProjectDetailPage/ProjectDetailPage.jsx";

import projects from "../../../utils/customJSON/projectsUpdated.json";
import {useDispatch} from "react-redux";
import {setProjectName} from "../../../store/slices/demoSlice.js";

function ProjectDetailWrapper() {
    const {projectId} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);
    // TODO: Add the turbines names to the allowedTurbinesNames array
    const [allowedTurbinesNames, setTurbinesNames] = useState([]);
    const [projectNameID, setProjectNameID] = useState('');

    // Redux
    const dispatch = useDispatch();
    const storedProjectId = localStorage.getItem('projectID')

    useEffect(() => {
        // Get the turbine name from local storage
        if (storedProjectId) {
            dispatch(setProjectName(storedProjectId))
        }
    }, [])

    useEffect(() => {
        // Checks if the project ID is in the projects array && renders the project detail page
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
    }, []);

    useEffect(() => {
        // Checks if the project ID is in the projects array and sets the project name
        projects.map((project) => {
            if (project.Project_ID === projectId) {
                setProjectNameID(project.Project_Name);
            }
        })
    }, []);

    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(projectId)) {
        // Render 404 page
        return <Custom404/>;
    }
    return <ProjectDetailPage projectId={projectId} projectName={projectNameID} storedProjectId={storedProjectId}/>;
}

export default ProjectDetailWrapper;