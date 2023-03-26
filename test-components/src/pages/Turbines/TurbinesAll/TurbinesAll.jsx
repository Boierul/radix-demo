import React, {useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK2V2 from "../../../components/HeaderText/MK2/v2/HeaderTextMK2V2.jsx";
import DialogDemo from "../../../components/Dialog/DialogDemo.jsx";

import plusIcon from '../../../icons/png/plus-inverted.png';
import styles from "./TurbinesAll.module.scss";
import TurbineLabel from "../../../components/TurbineLabel/TurbineLabel.jsx";


function TurbinesAll({storedProjectName, storedProjectId, turbineList}) {
    return (
        <>
            <Header/>

            <div className={styles.turbines_all_container}>
                <div className={styles.turbines_all_header_text}>
                    <HeaderTextMK2V2 title={`${storedProjectName}`}
                                     subtitle="Here are displayed all the data related to all your turbines"
                                     projectId={storedProjectId}
                    />
                </div>

                <div className={styles.turbines_all_grid_container}>
                    {turbineList.map((turbine) => {
                        return (
                                <TurbineLabel turbineName={turbine.Turbine_ID}
                                              projectId={storedProjectId}
                                              projectName={storedProjectName}/>
                        )
                    })}
                    <div className={styles.turbines_all_grid_container_row}>
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

            </div>
        </>
    );
}

export default TurbinesAll;