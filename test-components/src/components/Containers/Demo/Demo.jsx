import React from 'react';
import styles from './Demo.module.css';
import Header from "../../Header/Header.jsx";

import icon from "../../../icons/png/board.png";
import HoverCard from "../../HoverCard/HoverCard.jsx";
import PopoverDemo from "../../Popover/PopoverDemo.jsx";
import PopoverDemoMK2 from "../../Popover/PopoverDemoMK2.jsx";

function Demo({projectID, turbinesCount, projectName}) {

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
                        <HoverCard turbinesCount={turbinesCount}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Demo;