// DoughnutChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { pieChartData } from '../constants';
import { FiCircle } from 'react-icons/fi'

const DoughnutChart = () => {
  const { heading, data } = pieChartData;
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
      type: 'doughnut',
      data: {
        // labels: ['Success', 'Failure'],
        datasets: [
          {
            label: '# of Votes',
            data: [75, 25],
            backgroundColor: [
              'rgba(255, 99, 132,1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
              'blue',
              'gray',
            ],
            borderWidth: 15,
            weight: 0,
          },
        ],
      },
      options: {
        options: "80%",
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw;
              },
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
    <div className="doughnutComponentContainer p-3 border" style={{ width: '450px', position: 'relative', height: '250px' }}>
      <h4 style={{ marginLeft: '30px' }}>{heading}</h4>
      <div className="doughnutComponent d-flex align-items-center justify-content-center">
        <div className='doughnutChart' style={{ width: "150px" }}>
          <canvas ref={chartRef} />
        </div>
        <div>
          <ul className="list-unstyled ml-4">
            {data.map((item, index) => (
              <li key={index} className='d-flex' style={{ alignItems: 'center' }}>
                <FiCircle style={{ color: 'blue', width: '10px', position: "relative" }} />
                <span style={{ fontSize: '18px', fontWeight: '500', marginRight: '20px', display: 'block', width: '100px' }}>{item.label}({item.value})</span>
                <span style={{ fontSize: '18px', fontWeight: '500', display: 'block', width: '100px' }}>{item.count}({item.percentage}%)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
