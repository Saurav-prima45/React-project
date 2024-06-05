import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Ecommerse = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    // Create new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              40, 80, 30, 81, 56, 70, 40, 30, 35, 45, 50, 45, 32, 18, 25, 30,
              60, 70, 55, 50, 45, 35, 25, 20,
            ],
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            lineTension: 0.2, // Set line tension for smooth curves
            pointRadius: 0, // Remove points
            pointHoverRadius: 0, // Remove hover points
          },
          {
            label: "Dataset 2",
            data: [
              28, 50, 12, 50, 6, 60, 15, 40, 7, 35, 50, 45, 32, 18, 25, 30, 40,
              60, 50, 45, 30, 25, 15, 10,
            ],
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            lineTension: 0.4, // Set line tension for smooth curves
            pointRadius: 0, // Remove points
            pointHoverRadius: 0, // Remove hover points
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Completely hide the legend
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.dataset.label + ": " + tooltipItem.raw;
              },
            },
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "",
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            display: false,
            title: {
              display: true,
              text: "",
            },
            ticks: {
              display: false, // Remove y-axis values
            },
            beginAtZero: true,
            grid: {
              display: true, // Display y-axis grid lines
              drawBorder: false,
              lineWidth: 1,
              drawOnChartArea: false, // Only draw grid lines for y-axis values
              drawTicks: false,
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
    <div className="ecommerceChartContainer p-3 border ml-3 mr-5" style={{ width: '95%', height: 'auto' }}>
      <div className="d-flex ecommerceChart">
        <div className="col-lg-9">
          <p className="card-title mb-3">E-commerce Analytics</p>
          <div className="row">
            <div className="col-lg-9">
              <div className="d-sm-flex justify-content-between">
                <div className="dropdown">
                  <button
                    className="btn bg-white btn-sm dropdown-toggle btn-icon-text pl-0"
                    type="button"
                    id="dropdownMenuSizeButton4"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Mon,1 Oct 2019 - Tue,2 Oct 2019
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSizeButton4"
                    data-x-placement="top-start"
                  >
                    <h6 className="dropdown-header">
                      Mon,17 Oct 2019 - Tue,25 Oct 2019
                    </h6>
                    <a className="dropdown-item" href="#">
                      Tue,18 Oct 2019 - Wed,26 Oct 2019
                    </a>
                    <a className="dropdown-item" href="#">
                      Wed,19 Oct 2019 - Thu,26 Oct 2019
                    </a>
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-sm btn-light mr-2">
                    Day
                  </button>
                  <button type="button" className="btn btn-sm btn-light mr-2">
                    Week
                  </button>
                  <button type="button" className="btn btn-sm btn-light">
                    Month
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "320px" }}>
            <canvas ref={chartRef} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>

        <div className="col-lg-3 mr-3">
          <div>
            <div className="d-flex justify-content-between mb-3">
              <div className="text-success font-weight-bold">Inbound</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Current</div>
              <div className="text-muted">38.34M</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Average</div>
              <div className="text-muted">38.34M</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Maximum</div>
              <div className="text-muted">68.14M</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">60th %</div>
              <div className="text-muted">168.3GB</div>
            </div>
          </div>
          <hr />

          <div className="mt-4">
            <div className="d-flex justify-content-between mb-3">
              <div className="text-success font-weight-bold">Outbound</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Current</div>
              <div className="text-muted">458.77M</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Average</div>
              <div className="text-muted">1.45K</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="font-weight-medium">Maximum</div>
              <div className="text-muted">15.50K</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="font-weight-medium">60th %</div>
              <div className="text-muted">45.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerse;
