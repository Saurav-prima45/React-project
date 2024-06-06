import React, { useRef, useEffect } from 'react';
import { salesAnalytics } from '../constants';
import Chart from 'chart.js/auto';

const SalesAnalytics = () => {
    const { sales, data } = salesAnalytics;
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
                labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: data.map((item, index) => ({
                    label: '',
                    data: item.values,
                    borderColor: index === 0 ? 'blue' : index === 1 ? 'black' : 'yellow',
                    borderWidth: 2,
                    lineTension: 0.2, // Set line tension for smooth curves
                    pointRadius: 0, // Remove points
                    pointHoverRadius: 0, // Remove hover points
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
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
                        display: true,
                        title: {
                            display: true,
                            text: '',
                        },
                        grid: {
                            display: false, // Remove x-axis grid lines
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
        <div className="p-3 border" style={{ width: '420px', position: 'relative' }}>
            <h3>{sales}</h3>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                {data.map((item, id) => (
                    <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                            <img src={item.icon} alt="" width={10} />
                            <span style={{ fontWeight: '600' }}>{item.label}</span>
                        </div>
                        <p style={{ fontSize: '32px', fontWeight: '600', color: id === 0 ? 'blue' : id === 1 ? 'black' : 'yellow' }}>{item.value}</p>
                    </div>
                ))}
                <button style={{ height: 'fit-content', border: 'none', borderRadius: '5px' }}>Month</button>
            </div>
            <div style={{ height: '320px' }}>
                <canvas ref={chartRef} style={{ height: '100%' }} />
            </div>
        </div>
    );
};

export default SalesAnalytics;

