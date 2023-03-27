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
            onClick={(e)=> {
                console.log(e.data.Turbine_ID)
                // window.location.href = `/projects/${e.data.Project_ID}/turbines/${e.data.Turbine_ID}`
            }}
            tooltip={(e) => {
                return (
                    <div
                        style={{
                            backgroundColor: "white",
                            border: "1px solid black",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    >
                        <div>{`Date: ${e.data.TimestampUtc}`}</div>
                        <div>{`Project ID: ${e.data.Project_ID}`}</div>
                        <div>{`Turbine ID: ${e.data.Turbine_ID}`}</div>
                        <div>{`Kit ID: ${e.data.KitId}`}</div>
                        <div>{`Value: ${e.value}`}</div>
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
