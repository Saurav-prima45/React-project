import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { earningData } from '../constants';

const Earning = () => {
    const { cardTitle, data } = earningData;
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Destroy previous chart instance if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Create new chart instance
        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['', '', '', '', '', '', ''],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [10, 20, 15, 25, 30, 40, 35],
                        backgroundColor: 'rgba(54, 162, 235, 1)',
                    },
                    {
                        label: 'Dataset 2',
                        data: [15, 25, 10, 30, 25, 35, 20],
                        backgroundColor: 'gray',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false, // Hide the legend
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false, // Remove x-axis grid lines
                        },
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        grid: {
                            display: false, // Remove y-axis grid lines
                        },
                    },
                },
            },
        });

        // Cleanup on unmount
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="p-2 border" style={{ width: '350px', position: 'relative', height: '450px' }}>
            <h3>{cardTitle}</h3>
            <div>
                {data.map((item, id) => (
                    <div key={id}>
                        <p style={{ color: 'blue' }}>{item.label}</p>
                        <h3>{item.value}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div style={{}}>
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default Earning;
