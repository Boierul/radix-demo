import React from 'react';
import CalendarDemo from "../../components/Calendar/CalendarDemo.jsx";
import Header from "../../components/Header/Header.jsx";
import ContainerData from "../../components/ContainerData/ContainerData.jsx";
import HeaderText from "../../components/HeaderText/MK1/HeaderText.jsx";
import styles from './Visualise.module.scss'
import LinearChart from "../../components/Charts/LinearChart/LinearChart.jsx";
import LinearChartMK2 from "../../components/Charts/LinearChart/LinearChartMK2.jsx";
import PieChart from "../../components/Charts/PieChart/PieChart.jsx";
import ScatterPlot from "../../components/Charts/ScatterPlot/ScatterPlot.jsx";
import StreamChart from "../../components/Charts/StreamChart/StreamChart.jsx";
import NetworkChart from "../../components/Charts/NetworkChart/NetworkChart.jsx";

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

                <div className={styles.header_text}>
                    <HeaderText
                        title="Turbine Line Chart"
                        subtitle="Line chart that displays turbine data"
                    />
                </div>

                <div style={{
                    height: "300px",
                    paddingLeft: '3rem',
                    width: "auto",
                }}>
                    <LinearChart/>
                </div>

                <div style={{
                    height: "300px",
                    paddingLeft: '3rem',
                    width: "auto",
                }}>
                    <LinearChartMK2/>
                </div>

                <div className={styles.header_text}>
                    <HeaderText
                        title="Turbine Pie Chart"
                        subtitle="Pie chart that displays turbine statistics"
                    />
                </div>

                <div style={{
                    height: "800px",
                    paddingLeft: '3rem',
                    width: "auto"
                }}>
                    <PieChart/>
                </div>

                <div className={styles.header_text}>
                    <HeaderText
                        title="Turbine Trend Chart"
                        subtitle="Trend chart that displays turbine malfunctions"
                    />
                </div>

                <div style={{
                    height: "800px",
                    paddingLeft: '3rem',
                    width: "auto"
                }}>
                    <ScatterPlot/>
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

                <div className={styles.header_text}>
                    <HeaderText
                        title="Magnitude Stream Chart"
                        subtitle="Stream chart that displays turbine magnitude statistics"
                    />
                </div>

                <div style={{
                    height: "800px",
                    paddingLeft: '3rem',
                    width: "auto"
                }}>
                    <StreamChart/>
                </div>

                <div className={styles.header_text}>
                    <HeaderText
                        title="Network Chart"
                        subtitle="Network chart that displays turbine network"
                    />
                </div>

                <div style={{
                    height: "450px",
                    width: '80%',
                    scale: '1.2',
                    paddingLeft: '9rem',
                    paddingBottom: '1rem',
                    display: 'flex',

                }}>
                    <NetworkChart/>
                </div>
            </div>
        </>
    );
}

export default Visualise;