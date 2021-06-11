import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getSchools } from "./services/apiService";
// import auth from './utils/auth';
import Navbar from "./components/navbarComponent/Navbar";
import Dashboard from "./components/dashboardComponent/Dashboard";

function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    getSchools().then((schools) => {
      setSchools(schools);
    });
  }, []);
  console.log(schools);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Dashboard schools={schools} />
      </Router>
    </div>
  );
}

export default App;
