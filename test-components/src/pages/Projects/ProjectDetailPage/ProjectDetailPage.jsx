import React, {useEffect, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/MK1/HeaderText.jsx";

import ContentContainerLoadout from "../../../components/Containers/ContentContainer/ContentContainerLoadout.jsx";
import ScrollArea from "../../../components/ScrollArea/ScrollArea.jsx";

import styles from './ProjectDetailPage.module.scss';
import loadout from "../../../utils/demo-data/loadout.json";
import icon from "../../../icons/png/arrow-right-1.png";

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
                        <div className={styles.project_grid_row}>
                            <div className={styles.project_grid_row_title}>
                                <div className={styles.project_grid_row_container}>
                                    <>Turbines Activity</>
                                    <>
                                        <img
                                            className="Image small"
                                            src={icon}
                                            alt="icon"
                                            onClick={() => {
                                                window.location.href = `/projects/${projectId}/turbines`
                                            }}
                                        />
                                    </>
                                </div>
                            </div>

                            <div className={styles.project_grid_row_padding}>
                                <div className={styles.project_grid_turbines_title}>
                                    Turbines status
                                    <div className={styles.project_grid_turbines_title_value}>
                                        <span className={styles.project_grid_turbines_span}>Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.project_grid_turbines_title}>
                                Nr. of available turbines
                                <div className={styles.project_grid_turbines_title_value}>
                                    <span className={styles.project_grid_turbines_span}>46</span>
                                </div>
                            </div>

                            <div className={styles.project_grid_turbines_title}>
                                Nr. of turbine installations
                                <div className={styles.project_grid_turbines_title_value}>
                                    <span className={styles.project_grid_turbines_span}>52</span>
                                </div>
                            </div>

                        </div>

                        {stateCheck && <ContentContainerLoadout totalDurationCount={parseInt(totalDurationCount)}
                                                                totalAverageCount={parseInt(totalAverageDurationCount / totalLoadoutCount)}
                                                                totalLoadoutCount={totalLoadoutCount}
                        />}

                        <div className={styles.project_grid_row}>
                            <div className={styles.project_grid_row_title}>
                                Loadout Numbers
                                {/*    TODO Add a hover card to show the loadout numbers in other projects*/}
                            </div>
                            <ScrollArea/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectDetailPage;