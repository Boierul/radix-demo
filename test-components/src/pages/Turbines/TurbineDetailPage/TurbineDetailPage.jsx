import React from 'react';
import styles from './TurbineDetailPage.module.scss';
import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/HeaderText.jsx";

function TurbineDetailPage() {
    const projectName = "Project-01"
    const turbineName = "A03"

    return (
        <>
            <Header/>

            <div className={styles.turbines_detail_container}>
                <div className={styles.header_text}>
                    <HeaderText title={`${projectName} / Turbines / ${turbineName}`}
                                subtitle="Here is displayed all the data related to your current selected turbine"/>
                </div>
            </div>
        </>
    );
}

export default TurbineDetailPage;