import React from 'react';
import CalendarDemo from "../../components/Calendar/CalendarDemo.jsx";
import motionSensors from "../../utils/demo-data/motionsernsors.json";

function Visualise() {
    return (
        <div style={{
            height: "99vh",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <CalendarDemo data={motionSensors}/>
        </div>
    );
}

export default Visualise;