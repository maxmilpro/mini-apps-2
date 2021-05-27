import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TimeSeries = ({ data, labels }) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] =  useState(null);

  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'BTC Closing Price Last 30 Days',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      }
    };

    const newChartInstance = new Chart(chartContainer.current, chartConfig);
    setChartInstance(newChartInstance);

    return function cleanup() { newChartInstance.destroy(); };
  }, [data, labels]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  )
};

export default TimeSeries;
