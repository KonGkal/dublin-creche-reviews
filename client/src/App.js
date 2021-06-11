import React, { useState, useEffect } from "react";
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
      <Navbar />
      <Dashboard schools={schools} />
    </div>
  );
}

export default App;
