import React from 'react';
import Header from "../../components/Header/Header.jsx";
import styles from './TurbinesHome.module.css';
import HeaderText from "../../components/HeaderText/HeaderText.jsx";
import Map from "../../components/Maps/Map.jsx";

function TurbinesHome({projectId}) {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem',
            }}>
                <div className={styles.header_text}>
                    <HeaderText title={`${projectId} / Turbines`}
                                subtitle="Here are displayed all the data related to your turbines"/>
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