Copy-paste this directly into your **README.md**:

# 🚚 Vehicle Routing Problem Solver & Visualizer

A modern interactive web application for solving and visualizing the **Vehicle Routing Problem (VRP)** using multiple routing strategies. The project allows users to dynamically create delivery locations, compare routing algorithms, analyze route efficiency, and simulate real-world delivery conditions such as vehicle types, traffic, and weather.

---
## 🌐 Live Demo

**Deployed Application:**

[Vehicle Routing Visualizer Live Demo](https://pro-connect-liard.vercel.app/?utm_source=chatgpt.com)

---

## ✨ Features

### 🗺 Dynamic Route Management

* Add customer nodes dynamically
* Delete customer nodes
* Interactive route visualization
* Animated vehicle movement on route
* Depot (Warehouse) visualization

### 🧠 Routing Algorithms

* Nearest Neighbor
* Greedy Insertion
* Genetic Algorithm (Simulated)

### 📊 Performance Analytics

* Distance comparison between algorithms
* Fuel cost comparison
* Best algorithm detection
* Route efficiency calculation
* Delivery statistics dashboard

### 🚚 Vehicle Simulation

Choose different vehicle types:

* 🏍️ Bike
* 🚗 Car
* 🚐 Van
* 🚚 Truck

Each vehicle uses different fuel consumption rates.

### 🌦 Environment Simulation

Simulate real-world delivery conditions:

#### Traffic Levels

* 🚦 Low
* 🚦 Medium
* 🚦 High

#### Weather Conditions

* ☀️ Clear
* 🌧 Rain
* ⛈ Storm

These factors affect route distance and fuel cost calculations.

### 📈 Interactive Dashboard

* Total Customers
* Distance Covered
* Fuel Cost
* Route Efficiency
* Delivered Orders
* Pending Orders
* Fleet Status

### 📉 Data Visualization

Interactive charts displaying:

* Distance Comparison
* Fuel Cost Comparison
* Algorithm Performance Analysis

---

## 🛠 Tech Stack

| Layer            | Technology   |
| ---------------- | ------------ |
| Frontend         | React.js     |
| Charts           | Chart.js     |
| Styling          | CSS3         |
| Visualization    | SVG          |
| State Management | React Hooks  |
| Deployment       | Vercel       |
| Version Control  | Git & GitHub |

---

## 📂 Project Structure

```text
Vehicle-Routing-Problem/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GraphView.js
│   │   │   ├── ResultsPanel.js
│   │   │   └── Charts.js
│   │   │
│   │   ├── style/
│   │   │   └── theme.css
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

## 🚀 How It Works

1. User selects a routing algorithm.
2. Customer locations are added dynamically.
3. Vehicle type is selected.
4. Traffic and weather conditions are applied.
5. Routes are generated.
6. Dashboard metrics are updated.
7. Charts compare algorithm performance.
8. Animated vehicle traverses the selected route.

---

## 📊 Metrics Calculated

### Distance

Total distance traveled by selected route.

### Fuel Cost

Fuel Cost = Distance × Vehicle Fuel Rate

### Route Efficiency

Efficiency is calculated by comparing the selected route against the longest generated route.

### Delivery Statistics

* Total Orders
* Delivered Orders
* Pending Orders

---

## 🔮 Future Enhancements

* Real Genetic Algorithm implementation
* Real Nearest Neighbor implementation
* Multi-Vehicle Routing
* Export Route as JSON/CSV
* Dark Mode
* Route Drag & Drop
* Real Map Integration
* Backend API Integration
* Route Optimization using AI

---

## 👨‍💻 Author

**Rashi Gundawar**

Built using C++, React.js, Graph Algorithms, and Data Structures.
