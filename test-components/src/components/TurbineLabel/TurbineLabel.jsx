import React from 'react';
import styles from "./TurbineLabel.module.scss";
import PulsatingCircle from "../PulsatingCircle/PulsatingCircle.jsx";

function TurbineLabel({turbineName}) {
    return (
            <div className={styles.turbines_grid_row}>
                <div className={styles.turbines_grid_inner_container}>
                    <div className={styles.turbines_grid_title}>
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