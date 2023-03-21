import React from 'react';
import styles from "./ContentContainerLoadout.module.scss";

function ContentContainerLoadout({totalDurationCount, totalAverageCount, totalLoadoutCount}) {
    return (
        <div className={styles.layout_container_row}>
            <div className={styles.layout_title}>
                Loadout Activity
            </div>

            <div className={styles.layout_inner_container}>
                <div className={styles.layout_loadout_title}>
                    Number of loadouts: <span className={styles.layout_loadout_count}>{totalLoadoutCount}</span>
                </div>
                <div className={styles.layout_loadout_title}>
                    Total duration of all loadouts: <span className={styles.layout_loadout_count}>{totalDurationCount}h</span>
                </div>
                <div className={styles.layout_loadout_title}>
                    Average duration of a loadout: <span className={styles.layout_loadout_count}>{totalAverageCount}h</span>
                </div>
            </div>
        </div>
    );
}

export default ContentContainerLoadout;