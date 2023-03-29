import React, {useEffect, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK3 from "../../../components/HeaderText/MK3/HeaderTextMK3.jsx";
import Map from "../../../components/Maps/Map.jsx";
import ContentContainer from "../../../components/Containers/ContentContainer/ContentContainer.jsx";

import styles from './TurbineDetailPage.module.scss';
import installations from '../../../utils/demo-data/installations.json'
import services from '../../../utils/demo-data/services.json'
import commissions from '../../../utils/demo-data/commisions.json'
import ExcelFile from "../../../features/Excel/ExcelFile.jsx";
import TurbineDemo from "../../../components/TurbineDemo/TurbineDemo.jsx";

function TurbineDetailPage({projectId, projectName, storedTurbineName}) {

    /*--------------------------------------------------------------------------------------------*/

    // Installations data
    const [installationData, setInstallationData] = useState([]);
    const [installationsID, setInstallationsID] = useState([]);
    const [installationsDate, setInstallationsDate] = useState([]);
    const [installationsNetDuration, setInstallationsNetDuration] = useState([]);
    const [installationsDeviation, setInstallationsDeviation] = useState([]);


    // Function that filters the installations data from the API based on the turbine ID
    useEffect(() => {
        installations.map((installation) => {
            if (installation.Turbine_ID === storedTurbineName) {
                setInstallationData(installation)
                setInstallationsID(installation.Installation_ID)
                setInstallationsDate(formatDate(installation.Installation_Date))
                setInstallationsNetDuration(installation.Installation_NET_Duration + ' h')
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

    /*--------------------------------------------------------------------------------------------*/

    // Service data
    const [serviceData, setServiceData] = useState([]);
    const [servicesID, setServicesID] = useState([]);
    const [servicesDate, setServicesDate] = useState([]);
    const [servicesNetDuration, setServicesNetDuration] = useState([]);
    const [servicesDeviation, setServicesDeviation] = useState([]);

    // Function that filters the services data from the API based on the turbine ID
    useEffect(() => {
        services.map((service) => {
            if (service.Turbine_ID === storedTurbineName) {
                setServiceData(service)
                setServicesID(service.Service_ID)
                setServicesDate(formatDateWithoutAddedYear(service.Service_Date))
                setServicesNetDuration(service.Service_NET_Duration + ' h')
                setServicesDeviation(service.Service_Deviations)
            }
        })
    }, []);

    // Function that formats the date from the API to a more readable format
    function formatDateWithoutAddedYear(dateString) {
        const [day, month, year] = dateString.split('/');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames.map((name, index) => {
            if (index + 1 === parseInt(month)) {
                return name;
            }
        }).filter(Boolean)[0];
        return `${day} ${monthName} ${year}`;
    }

    /*--------------------------------------------------------------------------------------------*/

    // Commissioning data
    const [commissioningData, setCommissioningData] = useState([]);
    const [commissionID, setCommissionID] = useState([]);
    const [commissionsDate, setCommissionsDate] = useState([]);
    const [commissionsNetDuration, setCommissionsNetDuration] = useState([]);
    const [commissionsDeviation, setCommissionsDeviation] = useState([]);

    // Function that filters the commission data from the API based on the turbine ID
    useEffect(() => {
        commissions.map((commission) => {
            if (commission.Turbine_ID === storedTurbineName) {
                setCommissioningData(commission)
                setCommissionID(commission.Comm_ID)
                setCommissionsDate(formatDateWithoutAddedYear(commission.Comm_Date))
                setCommissionsNetDuration(commission.Comm_NET_Duration + ' h')
                setCommissionsDeviation(commission.Comm_Deviations)
            }
        })
    }, []);

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

            <div className={styles.turbines_detail_container}>
                <div className={styles.header_text}>
                    <HeaderTextMK3
                        title={`${projectName}`}
                        subtitle="Here is displayed all the data related to your current selected turbine"
                        projectId={`${projectId}`}
                        turbineId={`${storedTurbineName}`}
                    />

                    <div className={styles.turbines_detail_reports}>
                        <ExcelFile commissioningData={commissioningData}
                                   installationData={installationData}
                                   serviceData={serviceData}/>
                    </div>
                </div>


                <div className={styles.turbines_detail_reports_mobile}>
                    <ExcelFile commissioningData={commissioningData}
                               installationData={installationData}
                               serviceData={serviceData}/>
                </div>

                <div className={styles.turbines_detail_grid}>
                    <div className={styles.turbines_detail_row}>
                        <ContentContainer containerTitle={"Installations"}
                                          fieldTitleOne={"Installation ID"}
                                          fieldValueOne={installationsID}
                                          fieldTitleTwo={"Installation Date"}
                                          fieldValueTwo={installationsDate}
                                          fieldTitleThree={"Installation NET Duration"}
                                          fieldValueThree={installationsNetDuration}
                                          fieldTitleFour={"Installation Deviation"}
                                          fieldValueFour={(Math.round(installationsDeviation * 100) / 100).toFixed(2)}
                        />
                    </div>

                    <div className={styles.turbines_detail_row}>
                        <ContentContainer containerTitle={"Services"}
                                          fieldTitleOne={"Service ID"}
                                          fieldValueOne={servicesID}
                                          fieldTitleTwo={"Service Date"}
                                          fieldValueTwo={servicesDate}
                                          fieldTitleThree={"Service NET Duration"}
                                          fieldValueThree={servicesNetDuration}
                                          fieldTitleFour={"Service Deviation"}
                                          fieldValueFour={(Math.round(servicesDeviation * 100) / 100).toFixed(2)}
                        />
                    </div>

                    <div className={styles.turbines_detail_row}>
                        <ContentContainer containerTitle={"Commissioning"}
                                          fieldTitleOne={"Commission ID"}
                                          fieldValueOne={commissionID}
                                          fieldTitleTwo={"Commission Date"}
                                          fieldValueTwo={commissionsDate}
                                          fieldTitleThree={"Commission NET Duration"}
                                          fieldValueThree={commissionsNetDuration}
                                          fieldTitleFour={"Commission Deviation"}
                                          fieldValueFour={(Math.round(commissionsDeviation * 100) / 100).toFixed(2)}
                        />
                    </div>
                </div>

                <div className={styles.turbines_detail_grid_extra}>
                    <div className={styles.turbines_detail_row_alternative_extra} style={{
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

                <div className={styles.turbines_details_maps_container}>
                    <div className={styles.turbines_details_maps_container_inner}>
                        <Map/>
                    </div>
                </div>


                <div className={styles.turbines_detail_visualise_row} onClick={() => {
                    window.location.href = 'https://markshulhin.github.io/'
                }}>
                    Visualise Turbine
                </div>
            </div>
        </>
    );
}

export default TurbineDetailPage;