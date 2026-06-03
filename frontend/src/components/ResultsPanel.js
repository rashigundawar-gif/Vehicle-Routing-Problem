import React from "react";

function ResultsPanel({
  nodes,
  routes,
  selectedAlgo,
  vehicleType,
  traffic,
  weather
}) {

  const fuelRates = {
    Bike: 2,
    Car: 5,
    Van: 8,
    Truck: 15
  };

  const trafficMultiplier = {
    Low: 1,
    Medium: 1.2,
    High: 1.5
  };

  const weatherMultiplier = {
    Clear: 1,
    Rain: 1.15,
    Storm: 1.3
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

  const distances = {};

  Object.keys(routes).forEach(
    algo => {
      distances[algo] =
        calculateDistance(
          routes[algo]
        );
    }
  );

  const bestAlgo =
    Object.keys(
      distances
    ).reduce((a, b) =>
      distances[a] <
      distances[b]
        ? a
        : b
    
    );
    const longestDistance =
  Math.max(
    ...Object.values(
      distances
    )
  );

const currentDistance =
  distances[
    selectedAlgo
  ];

const efficiency =
  (
    (1 -
      currentDistance /
        longestDistance) *
    100
  ).toFixed(1);

  const adjustedDistance =
    currentDistance *
    trafficMultiplier[
      traffic
    ] *
    weatherMultiplier[
      weather
    ];

  const fuelCost =
    adjustedDistance *
    fuelRates[
      vehicleType
    ];

  const customers =
    nodes.length - 1;

  const delivered =
    Math.floor(
      customers * 0.8
    );

  const pending =
    customers -
    delivered;

  return (
    <div className="card">

      <h2>
        🏆 Best Algorithm
      </h2>

      <h3>
        {bestAlgo}
      </h3>

      <hr />

      <div className="stats-grid">

        <div className="stat-box">
          <h4>
            📍 Customers
          </h4>
          <p>
            {customers}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            🚗 Vehicle
          </h4>
          <p>
            {vehicleType}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            📏 Distance
          </h4>
          <p>
            {adjustedDistance.toFixed(
              2
            )}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            ⛽ Fuel
          </h4>
          <p>
            ₹
            {fuelCost.toFixed(
              0
            )}
          </p>
        </div>
      <div className="stat-box">
  <h4>
    ⚡ Efficiency
  </h4>
  <p>
    {efficiency}%
  </p>
</div>
        <div className="stat-box">
          <h4>
            🚦 Traffic
          </h4>
          <p>
            {traffic}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            🌦 Weather
          </h4>
          <p>
            {weather}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            ✅ Delivered
          </h4>
          <p>
            {delivered}
          </p>
        </div>

        <div className="stat-box">
          <h4>
            ⏳ Pending
          </h4>
          <p>
            {pending}
          </p>
        </div>

      </div>

      <hr />

      <h3>
        📊 Algorithm Comparison
      </h3>

      {Object.keys(
        distances
      ).map(algo => (

        <div
          key={algo}
          style={{
            marginBottom:
              "12px"
          }}
        >

          <strong>
            {algo}
          </strong>

          <br />

          Distance:
          {" "}
          {distances[
            algo
          ].toFixed(2)}

          <br />

          Fuel:
          {" "}
          ₹
          {(
            distances[
              algo
            ] *
            fuelRates[
              vehicleType
            ]
          ).toFixed(0)}

        </div>

      ))}

      <hr />

      <h3>
        🚚 Fleet Status
      </h3>

      <div>
        🏍️ Bike - Available
      </div>

      <div>
        🚗 Car - Active
      </div>

      <div>
        🚐 Van - Available
      </div>

      <div>
        🚚 Truck - Maintenance
      </div>

    </div>
  );
}
<div className="stat-box">
  <h4>
    🏭 Depot
  </h4>
  <p>
    Central Hub
  </p>
</div>
export default ResultsPanel;