import React, {useEffect, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/MK1/HeaderText.jsx";

import styles from './ProjectDetailPage.module.scss';
import ContentContainerLoadout from "../../../components/Containers/ContentContainer/ContentContainerLoadout.jsx";

import loadout from "../../../utils/demo-data/loadout.json";
import ScrollArea from "../../../components/ScrollArea/ScrollArea.jsx";

function ProjectDetailPage({projectId, projectName}) {
    const [loadoutData, setLoadoutData] = useState([]);
    // Synchronous concurrency flag
    const [stateCheck, setStateCheck] = useState(false);
    const [totalDurationCount, setTotalDurationCount] = useState(0);
    const [totalAverageDurationCount, setTotalAverageDurationCount] = useState(0);
    const [totalLoadoutCount, setTotalLoadoutCount] = useState(0);

    useEffect(() => {
        // Checks if the project ID is in the loadout array && renders the loadout data
        const result = loadout.filter((loadout) => loadout.Project_ID === projectId);

        if (result) {
            setLoadoutData(result);
            setStateCheck(true);
        }
    }, []);

    useEffect(() => {
        let sumDurationCount = 0;
        let sumAvgDurationCount = 0;

        loadoutData.forEach(({Project_ID, Loadout_ID, Total_Duration, Loadout_Duration}) => {
            sumDurationCount += Total_Duration;
            sumAvgDurationCount += Loadout_Duration;
        })

        // Numbers of loadouts
        setTotalLoadoutCount(loadoutData.length);
        setTotalDurationCount(sumDurationCount)
        setTotalAverageDurationCount(sumAvgDurationCount)

    }, [stateCheck]);

    return (
        <>
            <Header/>

            <div className={styles.project_detail_container}>
                <div className={styles.header_text}>
                    <HeaderText title={`${projectName}`}
                                subtitle="Here is displayed all the data related to your project"/>
                </div>

                <div className={styles.loadout_section}>
                    <div className={styles.grid_container}>
                        {stateCheck && <ContentContainerLoadout totalDurationCount={parseInt(totalDurationCount)}
                                                                totalAverageCount={parseInt(totalAverageDurationCount / totalLoadoutCount)}
                                                                totalLoadoutCount={totalLoadoutCount}
                        />}
                        <div className={styles.project_grid_row}>
                            <div className={styles.project_grid_row_title}>
                                Loadout Numbers
                                {/*    TODO Add a hover card to show the loadout num bers in other projects*/}
                            </div>
                            <ScrollArea headerText="Loadout Numbers"/>
                        </div>
                        <div className={styles.project_grid_row}>
                            <div className={styles.project_grid_row_title}>
                                Turbines Activity
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectDetailPage;