import React, {useEffect, useRef, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/MK1/HeaderText.jsx";

import styles from './ProjectDetailPage.module.scss';
import ContentContainerLoadout from "../../../components/Containers/ContentContainer/ContentContainerLoadout.jsx";

import loadout from "../../../utils/demo-data/loadout.json";
import projects from "../../../utils/customJSON/projectsUpdated.json";

function ProjectDetailPage({projectId, projectName}) {
    const [loadoutData, setLoadoutData] = useState([]);

    const projectIdDEMO = "P01";

    useEffect(() => {
        // Checks if the project ID is in the loadout array && renders the loadout data
        const result = loadout.filter((loadout) => loadout.Project_ID === projectIdDEMO);

        if (result) {
            setLoadoutData(result);
            // console.log(result);
        }
    }, []);

    useEffect(() => {
        console.log(loadoutData)
    }, [loadoutData]);


    // // Hook that runs when loadout changes to update the loadoutCountSum
    // useEffect(() => {
    //     // Only update loadoutCountSum when the sumTotalDuration changes
    //     if (prevState.current !== loadout) {
    //         setLoadoutData(loadout);
    //         // Update the previous value to the new one
    //         prevState.current = loadout;
    //     }
    // }, []); // Run this hook only when loadout changes

    return (
        <>
            <Header/>

            <div className={styles.project_detail_container}>
                <div className={styles.header_text}>
                    <HeaderText title={`${projectName}`}
                                subtitle="Here is displayed all the data related to your project"/>
                </div>

                <>
                    {/*{loadoutData.map(({Project_ID, Total_Duration, Average_Duration}) => ((Project_ID === projectIdDEMO) ?*/}
                    {/*    <ContentContainerLoadout loadoutCount={loadoutData.length}*/}
                    {/*                                totalLoadoutDuration={Total_Duration}*/}
                    {/*                                averageLoadoutDuration={Average_Duration}*/}
                    {/*                                key={Project_ID}*/}
                    {/*    /> : null))}*/}
                </>

                <div className={styles.loadout_section}>
                    <div className={styles.grid_container}>
                        <ContentContainerLoadout/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectDetailPage;