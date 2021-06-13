import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SchoolList from "../schoolsList/SchoolList";
import ReviewForm from "../reviewForm/ReviewForm";
import ReviewsList from "../reviewsList/ReviewsList";
import ReviewsContext from "../../context/ReviewsContext";
import MyReviews from "../myReviews/MyReviews";
import "./Dashboard.css";
import { ReactComponent as IconSvg } from "../../icons/noun_Child_1869302.svg";

import { useAuth0 } from "@auth0/auth0-react";
import { addNewUser, findUserbyEmail } from "../../services/apiService";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();
  const { email } = user;

  const getAllUsers = async () => {
    try {
      const token = await getAccessTokenSilently();

      const res = await fetch(`http://localhost:3001/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const isExistingUser = (userEmail) => {
    getAllUsers().then((res) => {
      if (res.filter((user) => user.email === userEmail).length === 0)
        addNewUser(email);
    });
  };

  isExistingUser(email);

  useEffect(() => {
    findUserbyEmail(email).then((user) => {
      setUserDetails(user);
    });
  }, [email]);

  const [reviews, setReviews] = useState([]);
  return (
    <div className="dashboard-container">
      <IconSvg className="icon" />
      <h1 className="school-list-header">Schools</h1>
      <Switch>
        <Route exact path="/" component={SchoolList} />
        <ReviewsContext.Provider value={{ reviews, setReviews, userDetails }}>
          <Route path="/review" component={ReviewForm} />
          <Route path="/myReviews" component={MyReviews} />
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
