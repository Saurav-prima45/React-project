import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ProgressBar } from "react-bootstrap";
import { salesAnalyticsTrendData } from "../constants";

const SalesAnalysisTrend = () => {
    const { heading, label1, value1, label2, value2, label3, value3 } = salesAnalyticsTrendData;
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
            type: 'line',
            data: {
                labels: ['Feb1', 'Feb11', 'Feb21', 'Mar3'],
                datasets: [
                    {
                        label: '',
                        data: [40, 80, 30, 81, 56, 70, 40, 85, 45, 78, 62, 89], // More data points
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true,
                        borderWidth: 2,
                        pointRadius: 0,
                    },
                ],
            },
            options: {
                responsive: true,
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
                    beforeDraw: (chart) => {
                        const { ctx, chartArea } = chart;
                        ctx.save();
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Background color
                        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                        ctx.restore();
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: '',
                        },
                        grid: {
                            display: true, // Show x-axis grid lines
                        },
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: '',
                        },
                        beginAtZero: true,
                        grid: {
                            display: true, // Show y-axis grid lines
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
        <div className="p-3 border" style={{ width: '330px', height: 'auto' }}>
            <h3>{heading}</h3>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <p>{label1}</p>
                <p>{value1}</p>
            </div>
            <ProgressBar now={60} variant="primary" style={{ height: "10px" }} />
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <p>{label2}</p>
                <p>{value2}</p>
            </div>
            <ProgressBar now={30} variant="success" style={{ height: "10px" }} />
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <p>{label3}</p>
                <p>{value3}</p>
            </div>
            <ProgressBar now={60} variant="warning" style={{ height: "10px" }} />
            <div style={{ height: '320px' }}>
                <canvas ref={chartRef} style={{ height: '100%' }} />
            </div>
        </div>
    );
};

export default SalesAnalysisTrend;
