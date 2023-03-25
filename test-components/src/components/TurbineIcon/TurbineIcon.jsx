import React from 'react';
import turbineIcon from '../../icons/SVG/wind-engine.svg'
import styles from './TurbineIcon.module.scss';

function TurbineIcon() {
    return (
        <div className={styles.turbine_icon_container}>
            <img src={turbineIcon} alt="turbine icon"/>
        </div>
    );
}

export default TurbineIcon;