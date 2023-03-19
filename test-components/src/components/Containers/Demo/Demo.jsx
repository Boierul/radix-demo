import React from 'react';
import styles from './Demo.module.css';
import Header from "../../Header/Header.jsx";

import icon from "../../../icons/png/board.png";
import HoverCard from "../../HoverCard/HoverCard.jsx";
import PopoverDemo from "../../Popover/PopoverDemo.jsx";
import PopoverDemoMK2 from "../../Popover/PopoverDemoMK2.jsx";

function Demo({turbinesCount, projectName}) {
    return (
        <>
            <div className={styles.projects_container}>
                <div className={styles.projects_inner_container}>
                    <div className={styles.project_text_container}>
                        <span className={styles.project_title}>Project</span>
                        <span className={styles.project_subtitle}>{projectName}</span>
                    </div>

                    <div className={styles.projects_icon_container}>
                        {/*<img src={icon} alt="icon" className={styles.projects_icon}/>*/}
                        <HoverCard turbinesCount={turbinesCount}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Demo;