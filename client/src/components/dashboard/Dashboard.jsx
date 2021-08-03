import React from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsList/SchoolList";
import ReviewsList from "../reviewsList/ReviewsList";
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";
import "./Dashboard.css";
import { ReactComponent as IconSvg } from "../../icons/noun_Child_1869302.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <IconSvg className="icon" alt="icon" />
      <Switch>
        <Route exact path="/" component={SchoolList} />
        <Route exact path="/review" component={ReviewsContainer} />
        <Route exact path="/myReviews" component={ReviewsContainer} />
        <Route path="/schoolReviews/:schoolId" exact component={ReviewsList} />
      </Switch>
    </div>
  );
};

export default Dashboard;
