import React from 'react';
import styles from './HeaderTextMK3.module.scss';

function HeaderTextMK3({title, subtitle, projectId, turbineId}) {

    function handleProjectClick() {
        window.location.href = `/projects/${projectId}`;
    }

    function handleProjectTurbinesClick() {
        window.location.href = `/projects/${projectId}/Turbines`;
    }

    function handleTurbineDetailsClick() {
        window.location.href = `/projects/${projectId}/Turbines/${turbineId}`;
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
                   <span className={styles.header_text_path_2} onClick={handleProjectTurbinesClick}>
                        / {turbineId}
                    </span>
               </div>
                <span className={styles.header_text_subtitle}>{subtitle}</span>
            </div>
        </>
    );
}

export default HeaderTextMK3;