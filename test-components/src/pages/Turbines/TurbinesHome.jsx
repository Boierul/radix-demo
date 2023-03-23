import React, {useEffect, useContext} from 'react';

import Map from "../../components/Maps/Map.jsx";
import Header from "../../components/Header/Header.jsx";
import HeaderTextMK2 from "../../components/HeaderText/MK2/HeaderTextMK2.jsx";

import styles from './TurbinesHome.module.scss';
import TurbineLabel from "../../components/TurbineLabel/TurbineLabel.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import plusIcon from "../../icons/png/plus-inverted.png";

function TurbinesHome({projectId, projectName, turbineList}) {
    // Limit the number of turbines to 10 to display
    const reduceList = turbineList.slice(0, 11);

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
                            <TurbineLabel turbineName={turbine.Turbine_ID} projectId={projectId}/>
                        )
                    })}
                    <div className={styles.turbine_grid_container_row}>
                        <DialogDemo title='Add turbine'
                                    description='Here you can add a new turbine to your list'
                                    labelOne={'Name'}
                                    labelTwo={'Others'}
                                    icon={plusIcon}
                                    buttonText={'Add turbine'}
                                    backgroundColor={'#000'}
                        />
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