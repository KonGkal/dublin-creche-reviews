import { useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Loading from "./components/loading/Loading";
import { useLoadScript } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { getAllSchools } from "./store/schools.store";

import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
    libraries: ["places"],
  });

  const errorCheck = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSchools());
  }, [dispatch]);

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

  if (loadError) return <h1>Error loading Maps</h1>;
  if (!isLoaded) return <h1>Loading Maps</h1>;
  return (
    <>
      <div>
        <h1 className="main-header">Dublin Creche Reviews</h1>
      </div>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
      <footer>© KonGkal 2021 All rights reserved</footer>
    </>
  );
}

export default App;
