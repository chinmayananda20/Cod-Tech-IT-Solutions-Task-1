import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
function App() {
  const [city, setcity] = useState('hyderabad');
  const updatecity = (param_city) => {
    setcity(param_city);
  }
  return (
    <Router>
      {/* navbar  */}
      <Navbar updatecity={updatecity} />
      <Routes>
        {/* current weather  */}
        <Route path="/" element={<Main city={city} />} />
        {/* weather forecast  */}
        <Route path="/forecast" element={<Forecast city={city} />} />
      </Routes>
    </Router>
  );
}

export default App;
