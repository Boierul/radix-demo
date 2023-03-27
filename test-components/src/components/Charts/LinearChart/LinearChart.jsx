import React from 'react';
import {ResponsiveLine} from '@nivo/line'

const data = [
    {
        id: "RPM Tracking",
        color: "hsl(221,50%,40%)",
        data: [{"x": "2021-01-01", "y": "1782"}, {"x": "2021-01-02", "y": "1423"}, {
            "x": "2021-01-03",
            "y": "1306"
        }, {"x": "2021-01-04", "y": "1375"}, {"x": "2021-01-05", "y": "1811"}, {
            "x": "2021-01-06",
            "y": "1379"
        }, {"x": "2021-01-07", "y": "1372"}, {"x": "2021-01-08", "y": "1425"}, {
            "x": "2021-01-09",
            "y": "1497"
        }, {"x": "2021-01-10", "y": "1466"}, {"x": "2021-01-11", "y": "1445"}, {
            "x": "2021-01-12",
            "y": "1436"
        }, {"x": "2021-01-13", "y": "1621"}, {"x": "2021-01-14", "y": "1499"}, {
            "x": "2021-01-15",
            "y": "1420"
        }, {"x": "2021-01-16", "y": "1449"}, {"x": "2021-01-17", "y": "1407"}, {"x": "2021-01-18", "y": "1612"}]
        ,
    },
];

const tooltip = ({point}) => (
    <div style={{background: 'white', padding: '5px 9px', border: '1px solid #ccc', borderRadius: '4px'}}>
        <div>Date: {point.data.xFormatted}</div>
        <div>RPM: {point.data.yFormatted}</div>
    </div>
);

function LinearChart() {
    return (
        <ResponsiveLine
            data={data}
            colors={{ scheme: 'pastel2' }}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 0,
                tickRotation: 0,
                legend: 'RPM',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabelYOffset={-12}
            tooltip={tooltip}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: -200,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default LinearChart;