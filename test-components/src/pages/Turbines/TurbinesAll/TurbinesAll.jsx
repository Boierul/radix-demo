import React from 'react';

import styles from "./TurbinesAll.module.scss";
import Header from "../../../components/Header/Header.jsx";
import HeaderTextMK2V2 from "../../../components/HeaderText/MK2/v2/HeaderTextMK2V2.jsx";

function TurbinesAll() {
    const storedProjectName = localStorage.getItem('projectName')
    // const storedTurbineName = localStorage.getItem('turbineName')
    const storedProjectId = localStorage.getItem('projectID')

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
            </div>
        </>
    );
}

export default TurbinesAll;