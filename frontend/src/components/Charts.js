import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Charts({
  nodes,
  routes,
  vehicleType
}) {

  const fuelRates = {
    Bike: 2,
    Car: 5,
    Van: 8,
    Truck: 15
  };

  const calculateDistance = (
    route
  ) => {

    let total = 0;

    for (
      let i = 0;
      i < route.length - 1;
      i++
    ) {

      const from =
        nodes.find(
          n =>
            n.id === route[i]
        );

      const to =
        nodes.find(
          n =>
            n.id ===
            route[i + 1]
        );

      if (!from || !to)
        continue;

      const dx =
        to.x - from.x;

      const dy =
        to.y - from.y;

      total += Math.sqrt(
        dx * dx +
        dy * dy
      );
    }

    return total;
  };

  const algorithms =
    Object.keys(routes);

  const distances =
    algorithms.map(
      algo =>
        calculateDistance(
          routes[algo]
        )
    );

  const fuelCosts =
    distances.map(
      distance =>
        distance *
        fuelRates[
          vehicleType
        ]
    );

  const chartData = {
    labels: algorithms,

    datasets: [
      {
        label:
          "Distance",

        data: distances,

        backgroundColor:
          "#3b82f6",

        borderRadius: 12
      },

      {
        label:
          "Fuel Cost",

        data: fuelCosts,

        backgroundColor:
          "#22c55e",

        borderRadius: 12
      }
    ]
  };

  const options = {
    responsive: true,

    maintainAspectRatio:
      false,

    plugins: {
      legend: {
        position: "top"
      },

      tooltip: {
        enabled: true
      }
    },

    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="chart-container">

      <h3>
        📊 Algorithm Performance Comparison
      </h3>

      <Bar
        data={chartData}
        options={options}
      />

    </div>
  );
}

export default Charts;