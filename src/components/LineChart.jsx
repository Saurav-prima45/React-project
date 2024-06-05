import React, { useEffect, useRef } from 'react';
import { lineChartData } from '../constants';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const { heading, data } = lineChartData;
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const getColor = (index) => {
    if (index === 0) return 'black';
    if (index === 1) return 'red';
    if (index === 2) return 'yellow';
    return '';
  };

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
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            data: [40, 80, 30, 81, 56, 70, 40],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            borderWidth: 2, // Reduce the line width
            pointRadius: 0,  // Remove the points/dots
          },
          {
            label: '',
            data: [28, 50, 12, 50, 6, 60, 30],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            borderWidth: 2, // Reduce the line width
            pointRadius: 0,  // Remove the points/dots
          },
          {
            label: '',
            data: [35, 70, 17, 60, 20, 18, 90],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            borderWidth: 2, // Reduce the line width
            pointRadius: 0,  // Remove the points/dots
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
            display: false,
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
    <div className="p-3 border" style={{ width: '330px', height: '250px' }}>
      <h4>{heading}</h4>
      <div style={{ display: 'flex', margin: '0 auto', gap: '10px', justifyContent: 'space-around' }}>
        {data.map((item, index) => (
          <div key={index} style={{ color: getColor(index) }}>
            {item.label}
          </div>
        ))}
      </div>

      <div style={{ height: '200px' }}> {/* Adjust the height here */}
        <canvas ref={chartRef} style={{ height: '100%' }} />
      </div>
    </div>
  );
};

export default LineChart;
