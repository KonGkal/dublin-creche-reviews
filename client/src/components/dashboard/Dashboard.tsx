import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsList/SchoolList";
import ReviewsList from "../reviewsList/ReviewsList";
import ReviewsContext from "../../context/ReviewsContext";
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";
import "./Dashboard.css";
import { ReactComponent as IconSvg } from "../../icons/noun_Child_1869302.svg";

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="dashboard-container">
      <IconSvg className="icon" />
      <Switch>
        <Route exact path="/" component={SchoolList} />
        <ReviewsContext.Provider value={{ reviews, setReviews }}>
          <ReviewsContainer />
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
