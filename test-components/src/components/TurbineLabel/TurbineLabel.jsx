import React, {useEffect} from 'react';
import styles from "./TurbineLabel.module.scss";
import PulsatingCircle from "../PulsatingCircle/PulsatingCircle.jsx";

function TurbineLabel({projectId, turbineName}) {

    function handleTurbineClick() {
        // Save to local storage (Redux is not persistent)
        localStorage.setItem('turbineName', turbineName)
        window.location.href = `/projects/${projectId}/turbines/${turbineName}`;
    }

    return (
        <div className={styles.turbines_grid_row}>
            <div className={styles.turbines_grid_inner_container}>
                <div className={styles.turbines_grid_title} onClick={handleTurbineClick}>
                    {turbineName}
                </div>
                <div className={styles.turbines_grid_container_circle}>
                    <PulsatingCircle/>
                </div>
            </div>
        </div>
    );
}

export default TurbineLabel;
