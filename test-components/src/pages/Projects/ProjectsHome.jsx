import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Demo from "../../components/Containers/Demo/Demo.jsx";
import styles from "./ProjectsHome.module.css";
import projects from '../../utils/demo-data/projects.json';

function ProjectsHome() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
                <div className={styles.grid_container}>
                    {projects.map(({Project_ID, Number_Of_Turbines, Project_Name}) => (
                        <div key={Project_ID} className={styles.grid_container_row}>
                            <Demo projectID={Project_ID} turbinesCount={Number_Of_Turbines} projectName={Project_Name}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsHome;