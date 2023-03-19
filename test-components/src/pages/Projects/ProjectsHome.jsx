import React, { useEffect, useState, useRef } from 'react';
import Header from "../../components/Header/Header.jsx";
import ProjectIcon from "../../components/Containers/Demo/ProjectIcon.jsx";
import styles from "./ProjectsHome.module.css";
import projects from '../../utils/demo-data/projects.json';
import loadout from '../../utils/demo-data/loadout.json';

function ProjectsHome() {
    // Store the previous sumTotalDuration value
    const prevSumTotalDuration = useRef(null);
    const [loadoutCountSum, setLoadoutCountSum] = useState({});

    // Function that sums the total duration of each project
    function sumTotalDuration(data) {
        const result = {};

        data.forEach((item) => {
            if (result[item.Project_ID]) {
                result[item.Project_ID] += item.Total_Duration;
            } else {
                result[item.Project_ID] = item.Total_Duration;
            }
        });

        return result;
    }

    // Hook that runs when loadout changes to update the loadoutCountSum
    useEffect(() => {
        const sumTotalDurationValue = sumTotalDuration(loadout);

        // Only update loadoutCountSum when the sumTotalDuration changes
        if (prevSumTotalDuration.current !== sumTotalDurationValue) {
            setLoadoutCountSum(sumTotalDurationValue);
            // Update the previous value to the new one
            prevSumTotalDuration.current = sumTotalDurationValue;
        }
    }, [loadout]); // Run this hook only when loadout changes

    return (
        <>
            <Header />
            <div style={{ paddingTop: '4rem' }}>
                <div className={styles.grid_container}>
                    {projects.map(({ Project_ID, Number_Of_Turbines, Project_Name }) => (
                        <div key={Project_ID} className={styles.grid_container_row}>
                            <ProjectIcon loadoutCount={parseInt(loadoutCountSum[Project_ID]) || 0} projectID={Project_ID} turbinesCount={Number_Of_Turbines} projectName={Project_Name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectsHome;
