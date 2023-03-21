import React from 'react';
import Header from "../../../components/Header/Header.jsx";
import styles from './UnderConstructionPage.module.scss';

function UnderConstructionPage(props) {
    return (
        <>
            <Header/>

            <div className={styles.construction_container}>
                <div className={styles.construction_title}>
                    Under Construction
                </div>
            </div>
        </>
    );
}

export default UnderConstructionPage;