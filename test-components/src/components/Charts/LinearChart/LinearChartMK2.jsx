import React from 'react';
import {ResponsiveLine} from '@nivo/line'

const data = [
    {
        id: "Air Temperature",
        color: "hsl(298,68%,38%)",
        data: [
            {"x": "2021-01-01", "y": 2984},
            {"x": "2021-01-02", "y": 2986},
            {"x": "2021-01-03", "y": 2988},
            {"x": "2021-01-04", "y": 2989},
            {"x": "2021-01-05", "y": 2991},
            {"x": "2021-01-06", "y": 2989},
            {"x": "2021-01-07", "y": 2988},
            {"x": "2021-01-08", "y": 2988},
            {"x": "2021-01-09", "y": 2988},
            {"x": "2021-01-10", "y": 2988},
            {"x": "2021-01-11", "y": 2990},
            {"x": "2021-01-12", "y": 2989},
            {"x": "2021-01-13", "y": 2987},
            {"x": "2021-01-14", "y": 2987},
            {"x": "2021-01-15", "y": 2988},
            {"x": "2021-01-16", "y": 2986},
            {"x": "2021-01-17", "y": 2985},
            {"x": "2021-01-18", "y": 2984}
        ]
    },
    {
        id: "Process Temperature",
        color: "hsl(297,33%,58%)",
        data: [
            {"x": "2021-01-01", "y": 1},
            {"x": "2021-01-02", "y": 2},
            {"x": "2021-01-03", "y": 3},
            {"x": "2021-01-04", "y": 4},
            {"x": "2021-01-05", "y": 3},
            {"x": "2021-01-06", "y": 2},
            {"x": "2021-01-07", "y": -1},
            {"x": "2021-01-08", "y": 2},
            {"x": "2021-01-09", "y": 2},
            {"x": "2021-01-10", "y": 2},
            {"x": "2021-01-11", "y": 2},
            {"x": "2021-01-12", "y": 2},
            {"x": "2021-01-13", "y": 2},
            {"x": "2021-01-14", "y": 2},
            {"x": "2021-01-15", "y": 2},
            {"x": "2021-01-16", "y": 2},
            {"x": "2021-01-17", "y": 2},
            {"x": "2021-01-18", "y": 3}
        ]
    }
]


const tooltip = ({point}) => (
    <div style={{background: 'white', padding: '5px 9px', border: '1px solid #ccc', borderRadius: '4px'}}>
        <div>Date: {point.data.xFormatted}</div>
        <div>Air Temperature [K]: {point.data.yFormatted}</div>
    </div>
);

function LinearChartMK2() {
    return (
        <ResponsiveLine
            data={data}
            colors={{scheme: 'pastel1'}}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.0f"
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
                legend: 'Temperature [K]',
                legendOffset: -50,
                legendPosition: 'middle',
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

export default LinearChartMK2;