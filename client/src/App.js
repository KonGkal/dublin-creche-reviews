import React, { useState, useEffect } from "react";
import { getSchools } from "./services/apiService";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Loading from "./components/loading/Loading";
import SchoolsContext from "./context/SchoolsContext";
import { useLoadScript } from "@react-google-maps/api";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [schools, setSchools] = useState([]);

  const {} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
    libraries: ["places"],
  });

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
    <>
      <div>
        <h1 className="main-header">Dublin Creche Reviews</h1>
      </div>
      <Navbar />
      <div className="container">
        <SchoolsContext.Provider value={{ schools, setSchools }}>
          <Dashboard />
        </SchoolsContext.Provider>
      </div>
      <footer>© KonGkal 2021 All rights reserved </footer>
    </>
  );
}

export default App;
