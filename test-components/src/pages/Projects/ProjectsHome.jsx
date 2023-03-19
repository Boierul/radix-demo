import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Demo from "../../components/Containers/Demo/Demo.jsx";
import styles from "./ProjectsHome.module.css";

function ProjectsHome() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
                <div className={styles.grid_container}>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="60" projectName="Project-01"/>
                    </div>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="84" projectName="Project-02"/>
                    </div>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="67" projectName="Project-03"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsHome;