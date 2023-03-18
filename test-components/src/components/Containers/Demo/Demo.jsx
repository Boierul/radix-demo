import React from 'react';
import styles from './Demo.module.css';
import Header from "../../Header/Header.jsx";

function Demo(props) {
    return (
        <>
            <Header/>
            <div className={styles.projects_container}>
                <div>
                    Projects

                </div>
            </div>
        </>
    );
}

export default Demo;