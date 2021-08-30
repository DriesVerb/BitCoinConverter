import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

export const Chart = ({ labels, history, currency }) => {
  return (
    <div className="chart__bottom">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: `Timeline of the price of Bitcoin to ${currency} for the last ${history.length} days`,
              data: history,
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 14,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;

Chart.propTypes = {
  labels: PropTypes.array,
  history: PropTypes.array,
  currency: PropTypes.string,
};
