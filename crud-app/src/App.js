// Filename - App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/users/Create";
import Edit from "./components/users/Edit";
import Home from "./components/users/Home";

function App() {
  return (
    <div className="App">
      <h1 >TELUGU IT TUTORIALS.COM </h1>
      <h3>CRUD Operations</h3>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
