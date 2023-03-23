import React from 'react';
import styles from './Custom404.module.scss';
import ButtonText from "../../components/Buttons/ButtonText/ButtonText.jsx"; // Import your CSS file here

function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.code}>404</h1>
                <h2 className={styles.heading}>This page could not be found.</h2>
            </div>
            <div className={styles.link_container}>
                <ButtonText text="Go to homepage" fontSize='12px'/>
            </div>
        </div>
    );
}

export default Custom404;
