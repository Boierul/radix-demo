import React from 'react';

import Map from "../../components/Maps/Map.jsx";
import Header from "../../components/Header/Header.jsx";
import HeaderTextMK2 from "../../components/HeaderText/MK2/HeaderTextMK2.jsx";

import styles from './TurbinesHome.module.scss';

function TurbinesHome({projectId, projectName}) {

    return (
        <>
            <Header/>

            <div className={styles.turbines_container}>
                <div className={styles.header_text}>
                    <HeaderTextMK2 title={`${projectName}`}
                                   subtitle="Here are displayed all the data related to your turbines"
                                   projectId={projectId}
                    />
                </div>

                <div className={styles.turbines_grid_container}>
                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>

                    <div className={styles.turbines_grid_row}>
                        Hej
                    </div>
                </div>

                <div className={styles.turbines_maps_container}>
                    <div className={styles.turbines_maps_container_inner}>
                        <Map/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TurbinesHome;