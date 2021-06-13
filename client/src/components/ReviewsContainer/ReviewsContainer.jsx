import React, { useEffect, useState } from "react";
import UserDetailsContext from "../../context/UserDetailsContext";
import { Route } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import MyReviews from "../myReviews/MyReviews";
import { useAuth0 } from "@auth0/auth0-react";
import { addNewUser, findUserbyEmail } from "../../services/apiService";

const ReviewsContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();

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
        addNewUser(user.email);
    });
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
