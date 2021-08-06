import { useEffect } from "react";
import { Route } from "react-router-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import MyReviews from "../myReviews/MyReviews";
import { useAuth0 } from "@auth0/auth0-react";
import { findUserByEmail } from "../../services/apiService";
import { useSelector, useDispatch } from "react-redux";
import { getOneUser, subscribeUser } from "../../store/userDetails.store";
import { setUser } from "../../store/userDetails.store";
import { userSelector } from "../../store/store";

const ReviewsContainer = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { user: userDetail } = useSelector(userSelector);
  const dispatch = useDispatch();

  const getAllUsers = async () => {
    try {
      const token = await getAccessTokenSilently();
      return dispatch(getOneUser(token));
    } catch (e) {
      console.log(e);
    }
  };

  const isExistingUser = (userEmail: string) => {
    try {
      if (
        user &&
        userDetail &&
        userDetail.filter((user) => user.email === userEmail).length === 0
      ) {
        dispatch(subscribeUser(user.email));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!user) getAllUsers();
    if (user) isExistingUser(user.email);
    if (user) {
      findUserByEmail(user.email).then((user) => {
        dispatch(setUser(user));
      });
    }
  }, [user, dispatch]);

  return (
    <>
      <Route path="/review" component={ReviewForm} />
      <Route path="/myReviews" component={MyReviews} />
    </>
  );
};

export default ReviewsContainer;
