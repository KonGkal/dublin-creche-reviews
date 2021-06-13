import React, { useEffect, useContext } from "react";
import ListedReview from "../listedReview/ListedReview";
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
    return <ListedReview key={review.id} review={review} />;
  });

  const overallRating = [];

  if (reviews.length) {
    const rating = reviews.reduce((acc, cur) => {
      console.log();
      return Number(acc.overall) + Number(cur.overall);
    });
    overallRating.push(rating);
  }

  return (
    <div>
      <h3>School rating {overallRating[0]} </h3>
      <ul>{listOfReviews}</ul>
    </div>
  );
};

export default ReviewsList;
