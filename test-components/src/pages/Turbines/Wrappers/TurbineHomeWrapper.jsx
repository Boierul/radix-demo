import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import TurbinesHome from "../TurbinesHome.jsx";
import Custom404 from "../../404/Custom404.jsx";
import projects from "../../../utils/demo-data/projects.json"

function TurbineHomeWrapper() {
    const {projectName} = useParams();
    const [allowedProjectNames, setAllowedProjectNames] = useState([]);
    const prevProjectState = useRef(null);

    // TODO solve the problem with the allowedProjectNames array not updating when the projects array changes or use fake API
    useEffect(() => {
        setAllowedProjectNames(projects.map((project) => project.id));
        console.log(allowedProjectNames)
    }, []);


    // Function that checks if the projectName is in the allowedProjectNames array
    if (!allowedProjectNames.includes(projectName)) {
        // Render 404 page
        return <Custom404/>;
    }

    return <TurbinesHome projectName={projectName}/>;
}

export default TurbineHomeWrapper;