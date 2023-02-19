import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Properties from "./properties";
import AddProperty from "./addProperty";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
