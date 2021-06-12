import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsListComponent/SchoolList";
import ReviewForm from "../reviewFormComponent/ReviewForm";
import ReviewsList from "../reviewsListComponent/ReviewsList";
import ReviewsContext from "../../context/ReviewsContext";
import "./Dashboard.css";

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  return (
    <div>
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
