import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SchoolList from '../schoolsListComponent/SchoolList';
import ReviewForm from '../reviewFormComponent/ReviewForm';

const Dashboard = ({schools}) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={listOfSchools => <SchoolList schools={schools} /> } />
        <Route path='/review' component={ReviewForm} />
      </Switch>
    </div>
  );
};

export default Dashboard;