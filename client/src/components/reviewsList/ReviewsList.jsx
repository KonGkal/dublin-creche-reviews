import React from "react";
import ListedReview from "../listedReview/ListedReview";
import { useEffect, useContext } from "react";
import { getSchoolReviews } from "../../services/apiService";
import { useParams } from "react-router-dom";
import ReviewsContext from "../../context/ReviewsContext";

const ReviewsList = () => {
  const { reviews, setReviews } = useContext(ReviewsContext);

  const { schoolId } = useParams();

  useEffect(() => {
    getSchoolReviews(schoolId).then((schoolReviews) => {
      setReviews(schoolReviews);
    });
  }, [schoolId, setReviews]);

  const listOfReviews = reviews.map((review) => {
    return <ListedReview key={review.updatedAt} review={review} />;
  });

  return (
    <div>
      <ul>{listOfReviews}</ul>
    </div>
  );
};

export default ReviewsList;
