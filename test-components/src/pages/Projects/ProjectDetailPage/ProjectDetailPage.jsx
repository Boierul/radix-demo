import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/HeaderText.jsx";

import styles from './ProjectDetailPage.module.scss';
import projects from '../../../utils/customJSON/projectsUpdated.json';

function ProjectDetailPage() {
    const {projectId} = useParams();
    const [projectName, setProjectName] = useState('No project name');

    // TODO - Add loadout section

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


    return (
        <>
            <Header/>

            <div className={styles.project_detail_container}>
                <div className={styles.header_text}>
                    <HeaderText title={`${projectName}`}
                                subtitle="Here is displayed all the data related to your project"/>
                </div>

                <div className={styles.loadout_section}>
                    <div className={styles.grid_container}>
                        <div className={styles.grid_container_row}>
                            Blea
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectDetailPage;