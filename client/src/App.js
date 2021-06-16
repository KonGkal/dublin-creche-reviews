import React, { useState, useEffect, useRef } from "react";
import { getSchool, getSchools } from "./services/apiService";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Loading from "./components/loading/Loading";
import SchoolsContext from "./context/SchoolsContext";
import { useLoadScript } from "@react-google-maps/api";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";

const libraries = ["places"];
function App() {
  const [schools, setSchools] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
    libraries,
  });

  const errorCheck = useRef(false);
  const errorHandler = () => {
    errorCheck.current = true;
  };

  useEffect(() => {
    async function school() {
      const { data, status } = await getSchools();
      if (status === 200) {
        setSchools(data);
      }
      if (status === 500) {
        errorHandler();
      }
    }
    school();
  }, []);

  const { isLoading } = useAuth0();

  if (errorCheck.current) {
    return (
      <div className="container">
        <p>Server Error</p>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";
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
