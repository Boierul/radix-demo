import React, {useEffect, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK3 from "../../../components/HeaderText/MK3/HeaderTextMK3.jsx";
import TurbineDemo from "../../../components/TurbineDemo/TurbineDemo.jsx";
import Map from "../../../components/Maps/Map.jsx";
import ContentContainer from "../../../components/Containers/ContentContainer/ContentContainer.jsx";

import styles from './TurbineDetailPage.module.scss';
import installations from '../../../utils/demo-data/installations.json'

function TurbineDetailPage({projectId, projectName, storedTurbineName}) {
    const [installationsCount, setInstallationsCount] = useState([]);
    const [installationsDate, setInstallationsDate] = useState([]);
    const [installationsNetDuration, setInstallationsNetDuration] = useState([]);
    const [installationsDeviation, setInstallationsDeviation] = useState([]);

    // Function that filters the installations data from the API based on the turbine ID
    useEffect(() => {
        installations.map((installation) => {
            if (installation.Turbine_ID === storedTurbineName) {
                setInstallationsCount(installation.Installation_ID)
                setInstallationsDate(formatDate(installation.Installation_Date))
                setInstallationsNetDuration(installation.Installation_NET_Duration)
                setInstallationsDeviation(installation.Installation_Deviations)
            }
        })
    }, []);

    // Function that formats the date from the API to a more readable format
    function formatDate(dateString) {
        const [month, day, year] = dateString.split('/');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames.map((name, index) => {
            if (index + 1 === parseInt(month)) {
                return name;
            }
        }).filter(Boolean)[0];
        return `${day} ${monthName} 20${year}`;
    }


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
                        <ContentContainer containerTitle={"Installations"}
                                          fieldTitleOne={"Installation ID"}
                                          fieldValueOne={installationsCount}
                                          fieldTitleTwo={"Installation Date"}
                                          fieldValueTwo={installationsDate}
                                          fieldTitleThree={"Installation NET Duration"}
                                          fieldValueThree={installationsNetDuration}
                                          fieldTitleFour={"Installation Deviation"}
                                          fieldValueFour={(Math.round(installationsDeviation * 100) / 100).toFixed(2)}
                        />
                    </div>

                    <div className={styles.turbines_detail_row}>
                        <TurbineDemo/>
                    </div>

                    <div className={styles.turbines_detail_row}>
                        <TurbineDemo/>
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