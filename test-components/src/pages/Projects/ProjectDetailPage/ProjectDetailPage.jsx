import React, {useEffect, useState} from 'react';

import Header from "../../../components/Header/Header.jsx";
import HeaderText from "../../../components/HeaderText/MK1/HeaderText.jsx";

import ContentContainer from "../../../components/Containers/ContentContainer/ContentContainer.jsx";
import ScrollArea from "../../../components/ScrollArea/ScrollArea.jsx";

import styles from './ProjectDetailPage.module.scss';
import loadout from "../../../utils/demo-data/loadout.json";
import icon from "../../../icons/png/arrow-right-1.png";

function ProjectDetailPage({projectId, projectName, storedProjectId, turbineCount}) {
    const [loadoutData, setLoadoutData] = useState([]);
    const [filteredLoadoutData, setFilteredLoadoutData] = useState([]);
    // Synchronous concurrency flag
    const [stateCheck, setStateCheck] = useState(false);
    const [totalDurationCount, setTotalDurationCount] = useState(0);
    const [totalAverageDurationCount, setTotalAverageDurationCount] = useState(0);
    const [totalLoadoutCount, setTotalLoadoutCount] = useState(0);

    // Filter the loadout data by project ID
    function filterLoadoutByProjectID(loadoutList, projectID) {
        return loadoutList
            .filter((loadout) => loadout.Project_ID === projectID)
    }

    // Checks if the project ID is in the loadout array && renders the loadout data
    useEffect(() => {
        const result =
            filterLoadoutByProjectID(loadout, storedProjectId);

        if (result) {
            setLoadoutData(result);
            setFilteredLoadoutData(result);
            setStateCheck(true);
        }
    }, []);

    // Calculates the total duration, average duration and total loadouts
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
                                            className={styles.project_grid_image}
                                            src={icon}
                                            alt="icon"
                                            onClick={() => {
                                                window.location.href = `/projects/${storedProjectId}/turbines`
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
                                    <span className={styles.project_grid_turbines_span}>{turbineCount}</span>
                                </div>
                            </div>

                            <div className={styles.project_grid_turbines_title}>
                                Nr. of turbine installations
                                <div className={styles.project_grid_turbines_title_value}>
                                    <span className={styles.project_grid_turbines_span}>{turbineCount}</span>
                                </div>
                            </div>

                        </div>

                        {stateCheck &&
                            <ContentContainer
                                containerTitle={"Loadout Activity"}
                                fieldTitleOne={"Number of loadouts"}
                                fieldTitleTwo={"Total loadout duration"}
                                fieldTitleThree={"Average loadout duration"}
                                fieldValueOne={totalLoadoutCount}
                                fieldValueTwo={parseInt(totalDurationCount) + ' h'}
                                fieldValueThree={parseInt(totalAverageDurationCount / totalLoadoutCount) + ' h'}
                            />
                        }

                        <div className={styles.project_grid_row}>
                            <div className={styles.project_grid_row_title}>
                                Loadout Numbers
                                {/*    TODO Add a hover card to show the loadout numbers in other projects*/}
                            </div>
                            <ScrollArea filteredLoadoutData={filteredLoadoutData}/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ProjectDetailPage;