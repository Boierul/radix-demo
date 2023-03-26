import { ResponsiveCalendar } from '@nivo/calendar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
        "value": 43,
        "day": "2016-10-03"
    },
    {
        "value": 26,
        "day": "2015-07-19"
    },
    {
        "value": 203,
        "day": "2017-02-09"
    },
    {
        "value": 9,
        "day": "2017-01-17"
    },
    {
        "value": 115,
        "day": "2016-07-26"
    },
    {
        "value": 235,
        "day": "2015-08-22"
    },
    {
        "value": 64,
        "day": "2016-03-08"
    },
    {
        "value": 163,
        "day": "2015-12-19"
    },
    {
        "value": 186,
        "day": "2016-11-30"
    },
    {
        "value": 69,
        "day": "2016-05-13"
    },
    {
        "value": 310,
        "day": "2016-12-18"
    },
    {
        "value": 102,
        "day": "2018-01-23"
    },
    {
        "value": 367,
        "day": "2016-02-24"
    },
    {
        "value": 3,
        "day": "2016-09-04"
    },
    {
        "value": 376,
        "day": "2017-08-20"
    },
    {
        "value": 374,
        "day": "2015-10-03"
    },
    {
        "value": 249,
        "day": "2016-04-18"
    },
    {
        "value": 180,
        "day": "2015-12-17"
    },
    {
        "value": 270,
        "day": "2016-05-23"
    },
    {
        "value": 262,
        "day": "2015-06-03"
    },
    {
        "value": 200,
        "day": "2015-07-01"
    },
    {
        "value": 343,
        "day": "2015-10-02"
    },
    {
        "value": 131,
        "day": "2016-11-21"
    },
    {
        "value": 340,
        "day": "2018-05-27"
    },
    {
        "value": 342,
        "day": "2016-06-29"
    },
    {
        "value": 320,
        "day": "2015-11-29"
    },
    {
        "value": 75,
        "day": "2016-11-15"
    },
    {
        "value": 191,
        "day": "2018-07-20"
    }
]

const CalendarDemo = () => (
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#fff"
        dayBorderWidth={2}
        dayBorderColor="#fff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

export default CalendarDemo;