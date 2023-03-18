import React from 'react';
import styles from './Demo.module.css';
import Header from "../../Header/Header.jsx";

import icon from "../../../icons/png/blueprint.png";

function Demo(props) {
    return (
        <>
            <div className={styles.projects_container}>
                <div className={styles.projects_inner_container}>
                    <div className={styles.project_text_container}>
                        <span className={styles.project_title}>Title</span>
                        <span className={styles.project_subtitle}>Subtitle</span>
                    </div>

                    <div className={styles.projects_icon_container}>
                        <img src={icon} alt="icon" className={styles.projects_icon}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Demo;