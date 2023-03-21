import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TurbinesHome from "../TurbinesHome.jsx";
import Custom404 from "../../404/Custom404.jsx";
import projects from "../../../utils/customJSON/projectsUpdated.json";

function TurbineHomeWrapper() {
    const {projectId} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);

    useEffect(() => {
        const result = projects.map((project) => project.Project_ID);
        setAllowedProjectNames(result);
    }, []);

    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(projectId)) {
        // Render 404 page
        return <Custom404/>;
    }

    return <TurbinesHome projectId={projectId}/>;
}

export default TurbineHomeWrapper;