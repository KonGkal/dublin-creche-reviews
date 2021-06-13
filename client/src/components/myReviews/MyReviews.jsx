import { useState, useEffect, useContext } from "react";
import { getUserReviews } from "../../services/apiService";
import UserDetailsContext from "../../context/UserDetailsContext";

const MyReviews = () => {
  const { userDetails } = useContext(UserDetailsContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    if (userDetails.length) {
      console.log("in useEffect", userDetails[0].id);
      getUserReviews(userDetails[0].id).then((reviews) => {
        setUserReviews(reviews);
      });
    }
  }, [userDetails]);
  if (userReviews) console.log(userReviews);

  return <div>Here are my Reviews</div>;
};

export default MyReviews;
