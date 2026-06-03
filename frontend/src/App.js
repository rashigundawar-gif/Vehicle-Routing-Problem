import React, { useState } from "react";
import GraphView from "./components/GraphView";
import ResultsPanel from "./components/ResultsPanel";
import Charts from "./components/Charts";
import "./style/theme.css";

function App() {
  const [vehicleType, setVehicleType] =
    useState("Car");

  const [traffic, setTraffic] =
    useState("Low");

  const [weather, setWeather] =
    useState("Clear");

  const [selectedAlgo, setSelectedAlgo] =
    useState("Nearest Neighbor");

  const [nodes, setNodes] = useState([
    {
      id: 0,
      x: 50,
      y: 50,
      depot: true
    },
    {
      id: 1,
      x: 20,
      y: 40
    },
    {
      id: 2,
      x: 80,
      y: 25
    },
    {
      id: 3,
      x: 60,
      y: 80
    }
  ]);

  const [newX, setNewX] = useState("");
  const [newY, setNewY] = useState("");

  const addNode = () => {
    if (
      newX === "" ||
      newY === ""
    )
      return;

    const node = {
      id: nodes.length,
      x: Number(newX),
      y: Number(newY)
    };

    setNodes([
      ...nodes,
      node
    ]);

    setNewX("");
    setNewY("");
  };

  const deleteNode = (id) => {
    if (id === 0) return;

    const updated =
      nodes.filter(
        (n) => n.id !== id
      );

    const reIndexed =
      updated.map(
        (node, index) => ({
          ...node,
          id: index
        })
      );

    setNodes(reIndexed);
  };

  const nearestNeighborRoute = [
    ...nodes.map(
      (node) => node.id
    ),
    0
  ];

  const greedyRoute = [
    0,
    ...nodes
      .slice(1)
      .sort(
        (a, b) =>
          a.x - b.x
      )
      .map(
        (node) => node.id
      ),
    0
  ];

  const geneticRoute = [
  0,
  ...nodes
    .slice(1)
    .sort(
      () =>
        Math.random() -
        0.5
    )
    .map(
      (n) => n.id
    ),
  0
];
const [darkMode,
setDarkMode] =
useState(false);
<button
onClick={()=>
setDarkMode(
!darkMode
)}
>
🌙
</button>

  const routes = {
    "Nearest Neighbor":
      nearestNeighborRoute,

    "Greedy Insertion":
      greedyRoute,

    Genetic:
      geneticRoute
  };

  const data = {
    nodes,
    routes
  };

  const exportRoute = () => {
  const dataStr = JSON.stringify(
    {
      nodes,
      routes
    },
    null,
    2
  );

  const blob = new Blob(
    [dataStr],
    { type: "application/json" }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download =
    "vehicle-route.json";

  link.click();
};
<button onClick={exportRoute}>
  📥 Export Route
</button>

  return (
    <div className="app">

      <h1 className="title">
        🚚 Vehicle Routing Visualizer
      </h1>

      <div className="controls-container">

        <select
          value={selectedAlgo}
          onChange={(e) =>
            setSelectedAlgo(
              e.target.value
            )
          }
        >
          <option>
            Nearest Neighbor
          </option>

          <option>
            Greedy Insertion
          </option>

          <option>
            Genetic
          </option>
        </select>

        <select
          value={vehicleType}
          onChange={(e) =>
            setVehicleType(
              e.target.value
            )
          }
        >
          <option value="Bike">
            🏍️ Bike
          </option>

          <option value="Car">
            🚗 Car
          </option>

          <option value="Van">
            🚐 Van
          </option>

          <option value="Truck">
            🚚 Truck
          </option>
        </select>

        <select
          value={traffic}
          onChange={(e) =>
            setTraffic(
              e.target.value
            )
          }
        >
          <option value="Low">
            🚦 Low
          </option>

          <option value="Medium">
            🚦 Medium
          </option>

          <option value="High">
            🚦 High
          </option>
        </select>

        <select
          value={weather}
          onChange={(e) =>
            setWeather(
              e.target.value
            )
          }
        >
          <option value="Clear">
            ☀️ Clear
          </option>

          <option value="Rain">
            🌧️ Rain
          </option>

          <option value="Storm">
            ⛈️ Storm
          </option>
        </select>

      </div>

      <div className="card add-node-card">

        <h3>
          ➕ Add Customer Node
        </h3>

        <input
          type="number"
          placeholder="X"
          value={newX}
          onChange={(e) =>
            setNewX(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Y"
          value={newY}
          onChange={(e) =>
            setNewY(
              e.target.value
            )
          }
        />

        <button
          onClick={addNode}
        >
          Add Node
        </button>

      </div>

      <div className="top-section">

        <ResultsPanel
          nodes={nodes}
          routes={routes}
          selectedAlgo={
            selectedAlgo
          }
          vehicleType={
            vehicleType
          }
          traffic={traffic}
          weather={weather}
        />

        <GraphView
          data={data}
          selectedAlgo={
            selectedAlgo
          }
          vehicleType={
            vehicleType
          }
          deleteNode={
            deleteNode
          }
          setNodes={setNodes}
        />

      </div>

      <Charts
        nodes={nodes}
        routes={routes}
        vehicleType={
          vehicleType
        }
      />

    </div>
  );
}

export default App;