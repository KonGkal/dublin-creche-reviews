import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsListComponent/SchoolList";
import ReviewForm from "../reviewFormComponent/ReviewForm";
import ReviewsList from "../reviewsListComponent/ReviewsList";
import ReviewsContext from "../../context/ReviewsContext";
import "./Dashboard.css";
import { ReactComponent as IconSvg } from "../../icons/noun_Child_1869302.svg";

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="dashboard-container">
      <IconSvg className="icon" />
      <h1 className="school-list-header">Schools</h1>
      <Switch>
        <Route exact path="/" component={SchoolList} />
        <ReviewsContext.Provider value={{ reviews, setReviews }}>
          <Route path="/review" component={ReviewForm} />
          <Route
            path="/schoolReviews/:schoolId"
            exact
            component={ReviewsList}
          />
        </ReviewsContext.Provider>
      </Switch>
    </div>
  );
};

export default Dashboard;
