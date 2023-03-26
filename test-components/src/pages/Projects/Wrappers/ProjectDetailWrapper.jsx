import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Custom404 from "../../404/Custom404.jsx";
import ProjectDetailPage from "../ProjectDetailPage/ProjectDetailPage.jsx";

import projects from "../../../utils/customJSON/projectsUpdated.json";
import installations from "../../../utils/demo-data/installations.json";
import {useDispatch} from "react-redux";
import {setProjectName} from "../../../store/slices/demoSlice.js";

function ProjectDetailWrapper() {
    const {projectId} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);
    // TODO: Add the turbines names to the allowedTurbinesNames array
    const [allowedTurbinesNames, setTurbinesNames] = useState([]);
    const [projectNameID, setProjectNameID] = useState('');
    const [turbineCount, setTurbineCount] = useState('');

    // Redux
    const dispatch = useDispatch();
    const storedProjectId = localStorage.getItem('projectID')

    // Checks if the project ID is in the projects array and sets the project name
    useEffect(() => {
        // Get the turbine name from local storage
        if (storedProjectId) {
            dispatch(setProjectName(storedProjectId))
        }
    }, [])

    // Checks if the project ID is in the projects array && renders the project detail page
    useEffect(() => {
        // Checks if the project ID is in the projects array && renders the project detail page
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
        setTurbineCount(projects.map((project) => {
            if (project.Project_ID === projectId) {
                return project.Turbines.length;
            }
        }))
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
        // Render 404 page  - Set timeout to render the 404 page after 1 second, for users not to see the page flickering
        return (setTimeout(() => {
            return <Custom404/>
        }, 500));
    }
    return <ProjectDetailPage projectId={projectId} projectName={projectNameID} storedProjectId={storedProjectId}
                              turbineCount={turbineCount}/>;
}

export default ProjectDetailWrapper;