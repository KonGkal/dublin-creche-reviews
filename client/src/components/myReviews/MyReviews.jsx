import { useState, useEffect, useContext } from "react";
import { getUserReviews } from "../../services/apiService";
import UserDetailsContext from "../../context/UserDetailsContext";
import UserReview from "./UserReview";

const MyReviews = () => {
  const { userDetails } = useContext(UserDetailsContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    if (userDetails.length) {
      getUserReviews(userDetails[0].id).then((reviews) => {
        setUserReviews(reviews);
      });
    }
  }, [userDetails]);

  const listOfUserReviews = [];

  if (userReviews) {
    listOfUserReviews.push(
      userReviews.map((review) => {
        return (
          <UserReview
            key={review.id}
            review={review}
            setUserReviews={setUserReviews}
          />
        );
      })
    );
  }

  return (
    <>
      <h1 className="header">My Reviews</h1>
      <div className="school-list shadow-and-border">
        <ul>{listOfUserReviews}</ul>
      </div>
    </>
  );
};

export default MyReviews;
