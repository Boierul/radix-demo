import React, {useEffect} from 'react';

import Map from "../../components/Maps/Map.jsx";
import Header from "../../components/Header/Header.jsx";
import HeaderTextMK2 from "../../components/HeaderText/MK2/HeaderTextMK2.jsx";

import styles from './TurbinesHome.module.scss';
import PulsatingCircle from "../../components/PulsatingCircle/PulsatingCircle.jsx";
import TurbineLabel from "../../components/TurbineLabel/TurbineLabel.jsx";

function TurbinesHome({projectId, projectName, turbineList}) {
    // Limit the number of turbines to 10 to display
    const reduceList = turbineList.slice(0, 11);

    useEffect(() => {
        console.log(reduceList)
    }, []);


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
                    {reduceList.map((turbine) => {
                        return (
                            <TurbineLabel turbineName={turbine.Turbine_ID}/>
                        )
                    })}
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