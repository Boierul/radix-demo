import {ResponsiveCalendar} from "@nivo/calendar";
import {useEffect, useState} from "react";
import motionSensors from "../../utils/demo-data/motionsernsors.json";

const CalendarDemo = () => {
    const [propData, setPropData] = useState(null);

    useEffect(() => {
        const newData = motionSensors.map((obj, index) => {
            return {
                ...obj,
                day: obj.TimestampUtc.split(' ')[0],
                value: index + 1
            };
        });

        setPropData(newData)
    }, []);

    return (
        <ResponsiveCalendar
            data={propData}
            keys={["value", "extraData"]}
            from="2021-03-01"
            to="2021-07-01"
            emptyColor="#eeeeee"
            colors={["#f47560", "#e8c1a0", "#97e3d5", "#61cdbb"]}
            margin={{top: 40, right: 40, bottom: 40, left: 40}}
            yearSpacing={40}
            monthBorderColor="#fff"
            onClick={(e) => {
                console.log(e)
                // window.location.href = `/projects/${e.data.Project_ID}/turbines/${e.data.Turbine_ID}`
            }}
            tooltip={(e) => {
                return (
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            padding: "20px",
                            boxShadow: '0 2px 10px rgba(0,0,0,.3)',
                            border: '1px solid rgba(0,0,0,.3)'
                        }}
                    >
                        <div><span style={{fontWeight: 600}}>Date:</span> {` ${e.data.TimestampUtc}`}</div>
                        <div><span style={{fontWeight: 600}}>Project ID:</span>{` ${e.data.Project_ID}`}</div>
                        <div><span style={{fontWeight: 600}}>Turbine ID: </span>{` ${e.data.Turbine_ID}`}</div>
                        <div><span style={{fontWeight: 600}}>Kit ID: </span>{` ${e.data.KitId}`}</div>
                        <div><span style={{fontWeight: 600}}>Value: </span>{` ${e.value}`}</div>
                        <div style={{
                            borderBottom: '1px solid rgba(0,0,0,.3)',
                            paddingTop: '.25rem',
                        }}/>
                        <div><span style={{fontWeight: 600}}>Magnitude_TP_Max: </span>{` ${e.data.Magnitude_TP_Max}`}</div>
                        <div><span style={{fontWeight: 600}}>Magnitude_TP_Mean: </span>{` ${e.data.Magnitude_TP_Mean}`}</div>
                        <div><span style={{fontWeight: 600}}>Magnitude_TP_Min: </span>{` ${e.data.Magnitude_TP_Min}`}</div>
                        <div><span style={{fontWeight: 600}}>Magnitude_VesselQuaySide_Max: </span>{` ${e.data.Magnitude_VesselQuaySide_Max}`}</div>
                        <div><span style={{fontWeight: 600}}>Magnitude_VesselQuaySide_Mean: </span>{` ${e.data.Magnitude_VesselQuaySide_Mean}`}</div>
                        <div><span style={{fontWeight: 600}}>Magnitude_VesselQuaySide_Min: </span>{` ${e.data.Magnitude_VesselQuaySide_Min}`}</div>
                    </div>
                )
            }
            }
            dayBorderWidth={2}
            dayBorderColor="#fff"
            legends={[{
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
            },]}
        />
    );

}

export default CalendarDemo;
