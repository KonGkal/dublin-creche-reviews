import React from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsListComponent/SchoolList";
import ReviewForm from "../reviewFormComponent/ReviewForm";
import ReviewsList from "../reviewsListComponent/ReviewsList";

const Dashboard = ({ schools, setSchools }) => {
  console.log(setSchools);
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(listOfSchools) => <SchoolList schools={schools} />}
        />
        <Route
          path="/review"
          render={() => (
            <ReviewForm schools={schools} setSchools={setSchools} />
          )}
        />
        <Route path="/schoolReviews/:id" exact component={ReviewsList} />
      </Switch>
    </div>
  );
};

export default Dashboard;
