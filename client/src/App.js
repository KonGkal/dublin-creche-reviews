import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getSchools } from './services/apiService';
// import auth from './utils/auth';
import Navbar from './components/navbarComponent/Navbar';
import SchoolList from './components/schoolsListComponent/SchoolList';

function App() {

  const [schools, setSchools] = useState([]);

  useEffect( () => {
    getSchools().then(schools => {
      setSchools(schools)
    });
  }, [])
  console.log(schools);

  return (
    <div className="App">
      <Router>
        <Navbar />
        {schools.length > 0 ?  <SchoolList schools={schools} /> : <h2>No events</h2> }
      </Router>
    </div>
  );
}

export default App;
