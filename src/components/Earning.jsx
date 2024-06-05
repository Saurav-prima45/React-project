import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { earningData } from '../constants';

const Earning = () => {
    const { cardTitle, data } = earningData;
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Define chart data
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Sales',
                    data: [50, 60, 70, 80, 90],
                    backgroundColor: createGradient(ctx, 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'),
                    borderColor: ['rgba(75, 192, 192, 1)'],
                    borderWidth: 1,
                },
            ],
        };

        // Define chart options
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        // Create the chart instance
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: options,
        });

        // Cleanup on unmount
        return () => {
            barChart.destroy();
        };
    }, []);

    // Function to create gradient for bar chart
    const createGradient = (ctx, color1, color2) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    };

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
            <div>
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default Earning;
