import React from 'react';
import styles from './ProjectItem.module.scss';
import HoverCard from "../../HoverCard/HoverCard.jsx";

function ProjectItem({projectID, turbinesCount, loadoutCount, projectName}) {

    function handleProjectClick() {
        window.location.href = `/projects/${projectID}`;
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

export default ProjectItem;