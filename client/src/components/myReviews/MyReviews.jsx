import { useState, useEffect, useContext } from "react";
import UserDetailsContext from "../../context/UserDetailsContext";

const MyReviews = () => {
  const { userDetails } = useContext(UserDetailsContext);
  console.log(userDetails);
  return <div>Here are my reviews</div>;
};

export default MyReviews;
