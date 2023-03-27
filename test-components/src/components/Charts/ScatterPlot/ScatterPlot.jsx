import React from 'react';
import {ResponsiveScatterPlot} from '@nivo/scatterplot'

const data = [
    {
        "id": "Tool Wear",
        "data": [
            {"x": 75, "y": 10},
            {"x": 38, "y": 15},
            {"x": 83, "y": 49},
            {"x": 53, "y": 76},
            {"x": 7, "y": 81},
            {"x": 26, "y": 91},
            {"x": 87, "y": 130},
            {"x": 14, "y": 153},
            {"x": 57, "y": 37},
            {"x": 83, "y": 44},
            {"x": 39, "y": 51},
            {"x": 82, "y": 70},
            {"x": 20, "y": 98},
            {"x": 43, "y": 111},
            {"x": 50, "y": 126},
            {"x": 98, "y": 138},
            {"x": 68, "y": 160},
            {"x": 34, "y": 185},
            {"x": 3, "y": 205},
            {"x": 38, "y": 210},
            {"x": 84, "y": 43},
            {"x": 38, "y": 54},
            {"x": 15, "y": 79},
            {"x": 93, "y": 98},
            {"x": 22, "y": 169},
            {"x": 49, "y": 56},
            {"x": 33, "y": 63},
            {"x": 65, "y": 84},
            {"x": 89, "y": 98},
            {"x": 110, "y": 109},
            {"x": 150, "y": 134},
            {"x": 180, "y": 139},
            {"x": 220, "y": 156},
            {"x": 240, "y": 201},
            {"x": 260, "y": 10},
            {"x": 280, "y": 76},
            {"x": 290, "y": 83},
            {"x": 310, "y": 100},
            {"x": 340, "y": 129},
            {"x": 370, "y": 155},
            {"x": 390, "y": 160},
            {"x": 420, "y": 191},
            {"x": 440, "y": 210},
            {"x": 460, "y": 215},
            {"x": 480, "y": 224},
            {"x": 500, "y": 235},
            {"x": 520, "y": 240},
            {"x": 540, "y": 2}
        ]
    }
];


const tooltip = ({point}) => (
    <div style={{background: 'white', padding: '5px 9px', border: '1px solid #ccc', borderRadius: '4px'}}>
        <div>Days: {point.data.x}</div>
        <div>Malfunctions: {point.data.y}</div>
    </div>
);

function ScatterPlot() {
    return (
        <ResponsiveScatterPlot
            data={data}
            colors={{ scheme: 'pastel2' }}
            margin={{top: 60, right: 140, bottom: 70, left: 90}}
            xScale={{type: 'linear', min: 0, max: 'auto'}}
            xFormat=">-.2f"
            yScale={{type: 'linear', min: 0, max: 'auto'}}
            yFormat=">-.2f"
            blendMode="multiply"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Days',
                legendPosition: 'middle',
                legendOffset: 46
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Number of malfunctions',
                legendPosition: 'middle',
                legendOffset: -60
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 130,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 12,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default ScatterPlot;