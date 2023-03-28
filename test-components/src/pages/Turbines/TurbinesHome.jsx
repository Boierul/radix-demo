import React, {useState} from 'react';
import Header from "../../components/Header/Header.jsx";
import HeaderTextMK2 from "../../components/HeaderText/MK2/HeaderTextMK2.jsx";

import styles from './TurbinesHome.module.scss';
import TurbineLabel from "../../components/TurbineLabel/TurbineLabel.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import plusIcon from "../../icons/png/plus-inverted.png";
import TurbineDemo from "../../components/TurbineDemo/TurbineDemo.jsx";
import ButtonText from "../../components/Buttons/ButtonText/ButtonText.jsx";
import ButtonOutline from "../../components/Buttons/ButtonOutline/ButtonOutline.jsx";

function TurbinesHome({projectId, projectName, turbineList}) {
    // Limit the number of turbines to 10 to display
    const reduceList = turbineList.slice(0, 11);

    /*----------------------------------------------------------------------------------------------------------------*/
    const morningBackground = 'linear-gradient(#C6E4EE 0%, #C6E4EE 40%, #FED1AE 60%, #FAA0B9 70%, #CB7DCB 80%, #757ECB 100%)'
    const dayBackground = 'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)'
    const eveningBackground = 'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)'
    const nightBackground = 'linear-gradient(to bottom, #020111 10%,#3a3a52 100%)'

    // Gets the current time
    const hour = new Date().getHours();
    // Sets the backgroundColor according to the time of the day
    function getBackgroundImage() {

        if (hour >= 6 && hour < 12) {
            return morningBackground;
        } else if (hour >= 12 && hour < 18) {
            return dayBackground;
        } else if (hour >= 18 && hour < 22) {
            return eveningBackground;
        } else {
            return nightBackground;
        }
    }

    // Sets the color of the text according to the time of the day (better readability)
    function getTextColor() {
        if (hour >= 6 && hour < 22) {
            return '#000';
        } else {
            return '#fff';
        }
    }


    /*----------------------------------------------------------------------------------------------------------------*/

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
                        <ButtonText text={'View all turbines'} path={`projects/${projectId}/turbinesAll`}/>
                    </div>
                </div>

                <div className={styles.turbines_all_link_mobile}>
                    <ButtonOutline text={'View all turbines'} path={`projects/${projectId}/turbinesAll`}/>
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

                <div className={styles.turbines_home_grid}>
                    <div className={styles.turbines_home_row_alternative} style={{
                        gridColumn: 'span 12',
                        backgroundImage: getBackgroundImage(),
                        color: getTextColor(),
                        borderRadius: '10px',
                        border: '1px solid #e0e0e0',
                        boxShadow: "0 2px 10px var(--blackA7)"
                    }}>
                        <TurbineDemo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TurbinesHome;