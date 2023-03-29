import React from 'react';

import Header from "../../components/Header/Header.jsx";
import HeaderTextMK2 from "../../components/HeaderText/MK2/HeaderTextMK2.jsx";
import TurbineLabel from "../../components/TurbineLabel/TurbineLabel.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import TurbineDemo from "../../components/TurbineDemo/TurbineDemo.jsx";
import ButtonText from "../../components/Buttons/ButtonText/ButtonText.jsx";
import ButtonOutline from "../../components/Buttons/ButtonOutline/ButtonOutline.jsx";

import plusIcon from "../../icons/png/plus-inverted.png";
import styles from './TurbinesHome.module.scss';

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
                    <div className={styles.turbines_all_link}>
                        <ButtonText text={'Manage turbines'} path={`construction`}/>
                        <ButtonText text={'View all turbines'} path={`projects/${projectId}/turbinesAll`}/>
                    </div>
                </div>

                <div className={styles.turbines_all_link_mobile}>
                    <ButtonOutline text={'View all turbines'} path={`projects/${projectId}/turbinesAll`}
                                   fontSize='15px'/>
                </div>

                <div className={styles.turbines_grid_container}>
                    {reduceList.map((turbine) => {
                        return (
                            <TurbineLabel turbineName={turbine.Turbine_ID} projectId={projectId}
                                          projectName={projectName}/>
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

            </div>
        </>
    );
}

export default TurbinesHome;