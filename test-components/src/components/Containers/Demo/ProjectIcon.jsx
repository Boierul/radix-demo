import React from 'react';
import styles from './Demo.module.css';
import HoverCard from "../../HoverCard/HoverCard.jsx";

function ProjectIcon({projectID, turbinesCount, loadoutCount, projectName}) {

    function handleProjectClick() {
        console.log("Project clicked")
    }

    return (
        <>
            <div className={styles.projects_container}>
                <div className={styles.projects_inner_container}>
                    <div className={styles.project_text_container}>
                        <span className={styles.project_title} onClick={handleProjectClick}>{projectName}</span>
                        <span className={styles.project_subtitle}>{projectID}</span>
                    </div>

                    <div className={styles.projects_icon_container}>
                        <HoverCard loadoutCount={loadoutCount} turbinesCount={turbinesCount}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectIcon;