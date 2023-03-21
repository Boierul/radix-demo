import React from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/HeaderText.jsx";

import styles from './ProjectDetailPage.module.scss';

function ProjectDetailPage({projectId, projectName}) {
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