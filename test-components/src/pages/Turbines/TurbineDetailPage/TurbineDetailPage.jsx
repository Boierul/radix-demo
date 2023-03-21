import React from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK3 from "../../../components/HeaderText/MK3/HeaderTextMK3.jsx";

import styles from './TurbineDetailPage.module.scss';

function TurbineDetailPage() {
    const projectId = "P01"
    const projectName = "Project-01"
    const turbineId = "A01"

    return (
        <>
            <Header/>

            <div className={styles.turbines_detail_container}>
                <div className={styles.header_text}>
                    <HeaderTextMK3
                        title={`${projectName}`}
                        subtitle="Here is displayed all the data related to your current selected turbine"
                        projectId={`${projectId}`}
                        turbineId={`${turbineId}`}
                    />
                </div>
            </div>
        </>
    );
}

export default TurbineDetailPage;