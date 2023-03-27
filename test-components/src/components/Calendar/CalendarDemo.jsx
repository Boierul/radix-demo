import {ResponsiveCalendar} from "@nivo/calendar";

const data = [
    {
        day: "2016-03-01",
        value: 1,
        timestampUtc: "2021-03-24 11:40:00.0000000",
        extraData: "Low activity"
    },
    {
        day: "2016-03-02",
        value: 2,
        timestampUtc: "2016-03-02",
        extraData: "Medium activity"
    },
    {
        day: "2016-03-03",
        value: 3,
        timestampUtc: "2016-03-03",
        extraData: "High activity"
    }
];

const CalendarDemo = () => (

    <ResponsiveCalendar
        data={data}
        keys={["value", "extraData"]}
        from="2016-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{top: 40, right: 40, bottom: 40, left: 40}}
        yearSpacing={40}
        monthBorderColor="#fff"
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
                    <div>{`Date: ${e.data.timestampUtc}`}</div>
                    {/*<div>{`Value: ${e.value}`}</div>*/}
                    {/*<div>{`Extra Data: ${e.data.extraData}`}</div>*/}
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

export default CalendarDemo;
