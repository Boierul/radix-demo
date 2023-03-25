import React from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK3 from "../../../components/HeaderText/MK3/HeaderTextMK3.jsx";

import styles from './TurbineDetailPage.module.scss';
import plusIcon from "../../../icons/png/plus.png";
import DialogDemo from "../../../components/Dialog/DialogDemo.jsx";
import TurbineDemo from "../../../components/TurbineDemo/TurbineDemo.jsx";

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
                        <DialogDemo title='Add project'
                                    description='Here you can add a new project to your list'
                                    labelOne={'Name'}
                                    labelTwo={'Others'}
                                    icon={plusIcon}
                                    buttonText={'Add project'}
                                    backgroundColor={'#fff'}
                        />
                    </div>

                    <div className={styles.turbines_detail_row}>
                            <TurbineDemo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TurbineDetailPage;