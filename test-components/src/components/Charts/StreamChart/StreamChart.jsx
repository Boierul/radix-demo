import React, {useEffect, useState} from 'react';
import { ResponsiveStream } from '@nivo/stream'

function StreamChart() {
    const data = [
        {
            "Magnitude_TP_Min": 0.000203,
            "Magnitude_TP_Max": 0.000215,
            "Magnitude_TP_Mean": 0.000061
        },
        {
            "Magnitude_TP_Min": 0.00048,
            "Magnitude_TP_Max": 0.000492,
            "Magnitude_TP_Mean": 0.000064
        },
        {
            "Magnitude_TP_Min": 0.002666,
            "Magnitude_TP_Max": 0.002678,
            "Magnitude_TP_Mean": 0.000092
        },
        {
            "Magnitude_TP_Min": 0.002667,
            "Magnitude_TP_Max": 0.002679,
            "Magnitude_TP_Mean": 0.019457
        },
        {
            "Magnitude_TP_Min": 0.142582,
            "Magnitude_TP_Max": 0.142594,
            "Magnitude_TP_Mean": 0.00196
        },
        {
            "Magnitude_TP_Min": 0.000192,
            "Magnitude_TP_Max": 0.000204,
            "Magnitude_TP_Mean": 0.000059
        },
        {
            "Magnitude_TP_Min": 0.004862,
            "Magnitude_TP_Max": 0.004874,
            "Magnitude_TP_Mean": 0.000196
        },
        {
            "Magnitude_TP_Min": 0.000183,
            "Magnitude_TP_Max": 0.000195,
            "Magnitude_TP_Mean": 0.000066
        },
        {
            "Magnitude_TP_Min": 0.000216,
            "Magnitude_TP_Max": 0.000228,
            "Magnitude_TP_Mean": 0.000062
        },
        {
            "Magnitude_TP_Min": 0.00035,
            "Magnitude_TP_Max": 0.000362,
            "Magnitude_TP_Mean": 0.000061
        },
        {
            "Magnitude_TP_Min": 0.00056,
            "Magnitude_TP_Max": 0.000572,
            "Magnitude_TP_Mean": 0.000075
        },
        {
            "Magnitude_TP_Min": 0.000246,
            "Magnitude_TP_Max": 0.000258,
            "Magnitude_TP_Mean": 0.000061
        },
        {
            "Magnitude_TP_Min": 0.020788,
            "Magnitude_TP_Max": 0.0208,
            "Magnitude_TP_Mean": 0.000498
        },
        {
            "Magnitude_TP_Min": 0.000231,
            "Magnitude_TP_Max": 0.000243,
            "Magnitude_TP_Mean": 0.000062
        }
    ]

    // Normalize the received data
    const normalizedData = data.map((item) => {
        const minValue = item.Magnitude_TP_Min;
        const maxValue = item.Magnitude_TP_Max;
        const meanValue = item.Magnitude_TP_Mean;
        const maxMagnitude = Math.max(minValue, maxValue, meanValue);

        return {
            Magnitude_TP_Min: minValue / maxMagnitude,
            Magnitude_TP_Max: maxValue / maxMagnitude,
            Magnitude_TP_Mean: meanValue / maxMagnitude,
        };
    });


    return (
        <ResponsiveStream
            data={normalizedData}
            keys={[
                'Magnitude_TP_Min',
                'Magnitude_TP_Max',
                'Magnitude_TP_Mean'
            ]}
            margin={{ top: 50, right: 210, bottom: 50, left: 60 }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40
            }}
            enableGridX={true}
            enableGridY={false}
            offsetType="diverging"
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.75}
            dotSize={8}
            dotColor={{ from: 'color' }}
            dotBorderWidth={2}
            dotBorderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.7
                    ]
                ]
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000'
                            }
                        }
                    ]
                }
            ]}
        />
    );
}

export default StreamChart;