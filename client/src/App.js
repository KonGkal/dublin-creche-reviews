import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import auth from './utils/auth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
