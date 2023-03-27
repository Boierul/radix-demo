import React from 'react';
import CalendarDemo from "../../components/Calendar/CalendarDemo.jsx";
import Header from "../../components/Header/Header.jsx";
import ContainerData from "../../components/ContainerData/ContainerData.jsx";
import HeaderText from "../../components/HeaderText/MK1/HeaderText.jsx";
import styles from './Visualise.module.scss'

function Visualise() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
                <div className={styles.header_text}>
                    <HeaderText
                        title="Equipment Data"
                        subtitle="Here is displayed all equipment data"
                    />
                </div>

                <div>
                    <ContainerData/>
                </div>

                <div className={styles.header_text} style={{
                    paddingTop: '2rem'
                }}>
                    <HeaderText
                        title="Motion Sensors"
                        subtitle="Here is displayed all motion sensors data"
                    />
                </div>

                <div style={{
                    height: "300px",
                    padding: '1rem 2.5rem',
                    width: "auto",
                }}>
                    <CalendarDemo/>
                </div>
            </div>
        </>
    );
}

export default Visualise;