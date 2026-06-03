# 🚚 Vehicle Routing Problem Solver & Visualizer

A full-stack project to solve and visualize the Vehicle Routing Problem (VRP) using multiple algorithms.

Built with **C++ (Backend)** and **React.js (Frontend)**, this system allows comparative analysis of routing strategies with interactive visualization.

---

# 🔥 Features

- 🧠 **Multiple Algorithms Implemented**
  - Nearest Neighbor
  - Greedy Insertion
  - Genetic Algorithm

- 📊 **Performance Comparison**
  - Total Distance
  - Execution Time
  - Route Efficiency

- 🗺️ **Interactive Visualization**
  - Graph-based Route Display
  - Algorithm-wise Route Selection
  - Animated Path Rendering

- 🏆 **Best Algorithm Detection**
  - Automatically identifies the most efficient route

- 📁 **JSON Export Support**
  - Stores route information for frontend visualization

---

# 🛠️ Tech Stack

| Layer | Technology |
|---------|------------|
| Backend | C++ (DSA, Graph Algorithms) |
| Frontend | React.js |
| Visualization | SVG + Chart.js |
| Data Handling | JSON |
| Build Tools | Vite |

---

# 📂 Project Structure

```bash
Vehicle-Routing-Problem-Solver-Visualizer
│
├── Backend
│   ├── main.cpp
│   ├── Graph.cpp
│   ├── Graph.h
│   ├── Node.h
│   ├── FileHandler.cpp
│   ├── FileHandler.h
│   ├── JSONWriter.cpp
│   ├── JSONWriter.h
│   └── output.json
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Algorithms Used

## 1️⃣ Nearest Neighbor

Starts from the depot and repeatedly visits the nearest unvisited node.

### Advantages
- Fast execution
- Easy implementation

### Limitations
- May not produce optimal routes

---

## 2️⃣ Greedy Insertion

Builds routes incrementally by inserting nodes at positions causing minimum increase in distance.

### Advantages
- Better route quality
- Efficient for medium-sized datasets

### Limitations
- Can get trapped in local optimum

---

## 3️⃣ Genetic Algorithm

Uses evolutionary principles such as selection, crossover, and mutation to optimize routes.

### Advantages
- High-quality solutions
- Suitable for large datasets

### Limitations
- Higher computation time

---

# 📈 Performance Metrics

The system compares algorithms based on:

- Total Distance Travelled
- Execution Time
- Route Cost
- Solution Quality

---

# 🎯 How It Works

1. User enters locations/nodes.
2. Backend creates graph representation.
3. Selected algorithm computes optimized routes.
4. Results are exported to JSON.
5. React frontend visualizes routes.
6. Performance statistics are displayed.
7. Best-performing algorithm is highlighted.

---

# 🔮 Future Enhancements

- Multi-Vehicle Support
- Time Window Constraints
- Real Map Integration
- AI-Based Route Prediction
- Live Traffic Data Integration
- Fleet Management Dashboard

---

# 👨‍💻 Author

**Rashi Gundawar**

Built with ❤️ using C++, React.js, Graph Algorithms, and Data Structures.
