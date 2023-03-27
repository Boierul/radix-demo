import React from 'react';
import CalendarDemo from "../../components/Calendar/CalendarDemo.jsx";
import Header from "../../components/Header/Header.jsx";
import ContainerData from "../../components/ContainerData/ContainerData.jsx";

function Visualise() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
                <div>
                    <ContainerData/>
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