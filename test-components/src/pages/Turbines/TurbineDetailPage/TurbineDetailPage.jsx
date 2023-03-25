import React from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK3 from "../../../components/HeaderText/MK3/HeaderTextMK3.jsx";

import styles from './TurbineDetailPage.module.scss';
import TurbineDemo from "../../../components/TurbineDemo/TurbineDemo.jsx";
import Map from "../../../components/Maps/Map.jsx";

function TurbineDetailPage({projectId, projectName, storedTurbineName}) {
    return (
        <>
            <Header/>

            <div className={styles.turbines_detail_container}>
                <div className={styles.header_text}>
                    <HeaderTextMK3
                        title={`${projectName}`}
                        subtitle="Here is displayed all the data related to your current selected turbine"
                        projectId={`${projectId}`}
                        turbineId={`${storedTurbineName}`}
                    />
                </div>
                <div className={styles.turbines_detail_grid}>
                    <div className={styles.turbines_detail_row}>

                    </div>

                    <div className={styles.turbines_detail_row}>

                    </div>

                </div>
                <div className={styles.turbines_details_maps_container}>
                    <div className={styles.turbines_details_maps_container_inner}>
                        <Map/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TurbineDetailPage;