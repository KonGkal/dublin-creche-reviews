import React, { useState, useEffect } from "react";
import { getSchools } from "./services/apiService";
import Navbar from "./components/navbarComponent/Navbar";
import Dashboard from "./components/dashboardComponent/Dashboard";
import Loading from "./components/loadingComponent/Loading";

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
      <Dashboard schools={schools} setSchools={setSchools} />
      <footer>This must be a footer</footer>
    </div>
  );
}

export default App;
