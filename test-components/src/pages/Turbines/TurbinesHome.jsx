import React from 'react';
import Header from "../../components/Header/Header.jsx";
import styles from './TurbinesHome.module.css';
import HeaderText from "../../components/HeaderText/HeaderText.jsx";
import Map from "../../components/Maps/Map.jsx";
import ProjectsHome from "../Projects/ProjectsHome.jsx";

function TurbinesHome({projectName}) {
    return (
        <>
            <ProjectsHome/>
        </>
    );
}

export default TurbinesHome;