import React from 'react';
import styles from "./ContentContainerLoadout.module.scss";

function ContentContainer({
                              containerTitle, fieldTitleOne, fieldTitleTwo, fieldTitleThree, fieldTitleFour,
                              fieldValueOne, fieldValueTwo, fieldValueThree, fieldValueFour
                          }) {
    return (
        <div className={styles.layout_container_row}>
            <div className={styles.layout_title}>
                {containerTitle}
            </div>

            <div className={styles.layout_inner_container}>
                {fieldTitleOne &&
                    <div className={styles.layout_field_title}>
                        {fieldTitleOne} <span className={styles.layout_loadout_count}>{fieldValueOne}</span>
                    </div>
                }
                {fieldTitleTwo &&
                    <div className={styles.layout_field_title}>
                        {fieldTitleTwo} <span className={styles.layout_loadout_count}>{fieldValueTwo}</span>
                    </div>
                }
                {fieldTitleThree &&
                    <div className={styles.layout_field_title}>
                        {fieldTitleThree} <span className={styles.layout_loadout_count}>{fieldValueThree}</span>
                    </div>
                }
                {fieldTitleFour &&
                    <div className={styles.layout_field_title}>
                        {fieldTitleFour} <span className={styles.layout_loadout_count}>{fieldValueFour}</span>
                    </div>}
            </div>
        </div>
    );
}

export default ContentContainer;