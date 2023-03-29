import React from 'react';
import styles from './HeaderTextMK2.module.scss';

function HeaderTextMK2({title, subtitle, projectId}) {

    function handleProjectClick() {
        window.location.href = `/projects/${projectId}`;
    }

    function handleProjectTurbinesClick() {
        window.location.href = `/projects/${projectId}/turbines`;
    }

    return (
        <>
            <div className={styles.header_text_container}>
               <div className={styles.header_text_container_title_container}>
                    <span className={styles.header_text_title} onClick={handleProjectClick}>
                        {title}
                    </span>
                    <span className={styles.header_text_path_1} onClick={handleProjectTurbinesClick}>
                        / Turbines
                    </span>
               </div>
                <span className={styles.header_text_subtitle}>{subtitle}</span>
            </div>
        </>
    );
}

export default HeaderTextMK2;