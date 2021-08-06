import { useState, useEffect } from "react";
import { getUserReviews } from "../../services/apiService";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/store";
import UserReview from "./UserReview";
import { ReviewInterface } from "../../interfaces/types";

const MyReviews = () => {
  const [userReviews, setUserReviews] = useState<ReviewInterface[]>([]);
  const { user } = useSelector(userSelector);
  const [userDetails] = user;

  useEffect(() => {
    if (userDetails) {
      getUserReviews(userDetails.id).then((reviews) => {
        setUserReviews(reviews);
      });
    }
  }, [userDetails]);

  const listOfUserReviews = userReviews
    ? userReviews.map((review) => {
        return (
          <UserReview
            key={review.id}
            review={review}
            setUserReviews={setUserReviews}
          />
        );
      })
    : null;

  return (
    <>
      <h1 className="header">My Reviews</h1>
      <div className="school-list shadow-and-border">
        {userReviews.length ? null : <p>There are no current reviews.</p>}
        <div>
          <ul>{listOfUserReviews}</ul>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
