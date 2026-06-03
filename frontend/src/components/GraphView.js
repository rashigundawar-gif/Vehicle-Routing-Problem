import React from "react";

function GraphView({
  data,
  selectedAlgo,
  vehicleType,
  deleteNode,
  setNodes
}) {
  const { nodes, routes } = data;

  const route =
    routes[selectedAlgo];

  const width = 900;
  const height = 550;

  const minX = Math.min(
    ...nodes.map((n) => n.x)
  );

  const maxX = Math.max(
    ...nodes.map((n) => n.x)
  );

  const minY = Math.min(
    ...nodes.map((n) => n.y)
  );

  const maxY = Math.max(
    ...nodes.map((n) => n.y)
  );

  const rangeX =
    maxX - minX || 1;

  const rangeY =
    maxY - minY || 1;

  const padding = 60;

  const scaleX = (x) =>
    ((x - minX) / rangeX) *
      (width - padding * 2) +
    padding;

  const scaleY = (y) =>
    ((y - minY) / rangeY) *
      (height - padding * 2) +
    padding;

  const reverseX = (x) =>
    ((x - padding) /
      (width - padding * 2)) *
      rangeX +
    minX;

  const reverseY = (y) =>
    ((y - padding) /
      (height - padding * 2)) *
      rangeY +
    minY;

  const vehicleIcons = {
    Bike: "🏍️",
    Car: "🚗",
    Van: "🚐",
    Truck: "🚚"
  };

  const routeColors = {
    Bike: "#22c55e",
    Car: "#3b82f6",
    Van: "#f59e0b",
    Truck: "#ef4444"
  };

  const handleGraphClick = (
    e
  ) => {
    const svg =
      e.currentTarget;

    const rect =
      svg.getBoundingClientRect();

    const clickX =
      e.clientX - rect.left;

    const clickY =
      e.clientY - rect.top;

    const newNode = {
      id: nodes.length,
      x: reverseX(clickX),
      y: reverseY(clickY)
    };

    setNodes([
      ...nodes,
      newNode
    ]);
  };

  const pathString = route
    .map((nodeId, i) => {
      const node =
        nodes.find(
          (n) =>
            n.id === nodeId
        );

      if (!node) return "";

      return `${
        i === 0 ? "M" : "L"
      } ${scaleX(node.x)},
      ${scaleY(node.y)}`;
    })
    .join(" ");

  return (
    <div className="card">

      <h3>
        🗺 Route Visualization
      </h3>

      <p>
        Algorithm:
        {" "}
        <strong>
          {selectedAlgo}
        </strong>
      </p>

      <p>
        Click anywhere on
        graph to add node.
      </p>

      <p>
        Click customer node
        to delete.
      </p>

      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        onClick={
          handleGraphClick
        }
      >

        {/* ROUTES */}

        {route.map(
          (nodeId, i) => {
            if (
              i ===
              route.length - 1
            )
              return null;

            const from =
              nodes.find(
                (n) =>
                  n.id ===
                  nodeId
              );

            const to =
              nodes.find(
                (n) =>
                  n.id ===
                  route[i + 1]
              );

            if (
              !from ||
              !to
            )
              return null;

            return (
              <line
                key={i}
                x1={scaleX(
                  from.x
                )}
                y1={scaleY(
                  from.y
                )}
                x2={scaleX(
                  to.x
                )}
                y2={scaleY(
                  to.y
                )}
                stroke={
                  routeColors[
                    vehicleType
                  ]
                }
                strokeWidth="4"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(0,0,0,.15))"
                }}
              />
            );
          }
        )}

        {/* NODES */}

        {nodes.map((node) => (
          <g
            key={node.id}
            onClick={(e) => {
              e.stopPropagation();

              if (
                node.id !== 0
              ) {
                deleteNode(
                  node.id
                );
              }
            }}
            style={{
              cursor:
                node.id === 0
                  ? "default"
                  : "pointer"
            }}
          >

            <circle
              cx={scaleX(node.x)}
              cy={scaleY(node.y)}
              r="18"
              fill={
                node.id === 0
                  ? "#ef4444"
                  : "#38bdf8"
              }
            />

            <text
              x={
                scaleX(node.x) +
                18
              }
              y={
                scaleY(node.y) -
                12
              }
              fontSize="14"
              fill="#334155"
            >
              {node.id === 0
                ? "🏠 Depot"
                : `📍${node.id}`}
            </text>

          </g>
        ))}

        {/* MOVING VEHICLE */}

        <g>
          <text
            fontSize="34"
          >
            {
              vehicleIcons[
                vehicleType
              ]
            }

            <animateMotion
              dur={
                vehicleType ===
                "Bike"
                  ? "6s"
                  : vehicleType ===
                    "Car"
                  ? "4s"
                  : vehicleType ===
                    "Van"
                  ? "5s"
                  : "7s"
              }
              repeatCount="indefinite"
              path={pathString}
            />
          </text>
        </g>

      </svg>

      <div
        style={{
          marginTop: "15px"
        }}
      >
        <strong>
          Route Legend
        </strong>

        <div>
          🏍️ Bike →
          Green Route
        </div>

        <div>
          🚗 Car →
          Blue Route
        </div>

        <div>
          🚐 Van →
          Orange Route
        </div>

        <div>
          🚚 Truck →
          Red Route
        </div>
      </div>

    </div>
  );
}

export default GraphView;