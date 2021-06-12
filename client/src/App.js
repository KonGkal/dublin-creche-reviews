import React, { useState, useEffect } from "react";
import { getSchools } from "./services/apiService";
import Navbar from "./components/navbarComponent/Navbar";
import Dashboard from "./components/dashboardComponent/Dashboard";
import Loading from "./components/loadingComponent/Loading";
import SchoolsContext from "./context/SchoolsContext";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    getSchools().then((schools) => {
      setSchools(schools);
    });
  }, []);

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <SchoolsContext.Provider value={{ schools, setSchools }}>
        <Dashboard schools={schools} setSchools={setSchools} />
      </SchoolsContext.Provider>
      <footer>© KonGkal 2021 All rights reserved </footer>
    </div>
  );
}

export default App;
