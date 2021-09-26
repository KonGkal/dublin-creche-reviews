import { useEffect } from "react";
import { Route } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import MyReviews from "../myReviews/MyReviews";
import { useAuth0 } from "@auth0/auth0-react";
import { findUserByEmail } from "../../services/apiService";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, subscribeUser } from "../../store/userDetails.store";
import { setUser } from "../../store/userDetails.store";
import { AppDispatch, userSelector } from "../../store/store";

const ReviewsContainer = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { user: userDetail } = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(saveInitialUsersToStore, [dispatch, getAccessTokenSilently, user]);
  useEffect(saveNewUserToDatabase, [dispatch, user, userDetail]);
  useEffect(overrideUsersWithCurrentOne, [user, dispatch, userDetail]);

  function saveInitialUsersToStore() {
    if (user) {
      getAccessTokenSilently().then((token) => {
        dispatch(getAllUsers(token));
      });
    }
  }

  function saveNewUserToDatabase() {
    if (!user) return;
    const userEmail = user.email;
    const isNewUser =
      user &&
      userDetail &&
      !userDetail.find((user2) => user2?.email === userEmail);

    if (isNewUser) {
      console.log("saving new user to DB");
      dispatch(subscribeUser(user.email));
    }
  }

  function overrideUsersWithCurrentOne() {
    const isCurrentUserSaved = userDetail[0]?.email === user.email;

    if (!isCurrentUserSaved) {
      findUserByEmail(user.email).then((user) => {
        dispatch(setUser(user));
      });
    }
  }

  return (
    <>
      <Route path="/review" component={ReviewForm} />
      <Route path="/myReviews" component={MyReviews} />
    </>
  );
};

export default ReviewsContainer;
