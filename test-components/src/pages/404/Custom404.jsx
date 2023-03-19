import React from 'react';
import styles from './Custom404.module.css';
import {Link} from "react-router-dom"; // Import your CSS file here

function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.code}>404</h1>
                <h2 className={styles.heading}>This page could not be found.</h2>
            </div>
            <div className={styles.link_container}>
                <Link to="/">
                    <a className={styles.link}>Go back to the homepage</a>
                </Link>
            </div>
        </div>
    );
}

export default Custom404;
