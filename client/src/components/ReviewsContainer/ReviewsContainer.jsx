import React, { useEffect, useState } from "react";
import UserDetailsContext from "../../context/UserDetailsContext";
import { Route } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import MyReviews from "../myReviews/MyReviews";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addNewUser,
  findUserbyEmail,
  getUser,
} from "../../services/apiService";

const ReviewsContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();

  const getAllUsers = async () => {
    try {
      const token = await getAccessTokenSilently();

      return await getUser(token);
    } catch (e) {
      console.log(e);
    }
  };

  const isExistingUser = (userEmail) => {
    try {
      getAllUsers().then((res) => {
        if (res.filter((user) => user.email === userEmail).length === 0)
          addNewUser(user.email);
      });
    } catch (e) {
      console.log(e);
    }
  };
  if (user) isExistingUser(user.email);

  useEffect(() => {
    if (user) {
      findUserbyEmail(user.email).then((user) => {
        setUserDetails(user);
      });
    }
  }, [user]);

  return (
    <UserDetailsContext.Provider value={{ userDetails }}>
      <Route path="/review" component={ReviewForm} />
      <Route path="/myReviews" component={MyReviews} />
    </UserDetailsContext.Provider>
  );
};

export default ReviewsContainer;
