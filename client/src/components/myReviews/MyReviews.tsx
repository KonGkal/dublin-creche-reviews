import { useState, useEffect, useCallback } from "react";
import { getUserReviews } from "../../services/apiService";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/store";
import UserReview from "./UserReview";
import { ReviewInterface } from "../../interfaces/types";

const MyReviews = () => {
  const [userReviews, setUserReviews] = useState<ReviewInterface[]>([]);
  const { user } = useSelector(userSelector);
  const [userDetails] = user;

  const getReviews = useCallback(async () => {
    if (userDetails) {
      const userReviews: ReviewInterface[] = await getUserReviews(
        userDetails.id
      );
      setUserReviews(userReviews);
    }
  }, [userDetails]);

  useEffect(() => {
    getReviews();
  }, [userDetails, getReviews]);

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
        {userReviews.length ? (
          <ul>{listOfUserReviews}</ul>
        ) : (
          <p>There are no current reviews.</p>
        )}
      </div>
    </>
  );
};

export default MyReviews;
