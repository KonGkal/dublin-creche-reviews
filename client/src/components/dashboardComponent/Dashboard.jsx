import React from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsListComponent/SchoolList";
import ReviewForm from "../reviewFormComponent/ReviewForm";
import ReviewsList from "../reviewsListComponent/ReviewsList";

const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SchoolList} />
        <Route path="/review" component={ReviewForm} />
        <Route path="/schoolReviews/:id" exact component={ReviewsList} />
      </Switch>
    </div>
  );
};

export default Dashboard;
