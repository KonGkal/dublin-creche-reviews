import React from "react";
import ListedReview from "../listedReviewComponent/ListedReview";
import { useEffect, useState } from "react";
import { getSchoolReviews } from "../../services/apiService";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getSchoolReviews(1).then((schoolReviews) => {
      setReviews(schoolReviews);
    });
  }, []);

  const listOfReviews = reviews.map((review) => {
    return <ListedReview key={review.id} review={review} />;
  });

  return (
    <div>
      <ul>{listOfReviews}</ul>
    </div>
  );
};

export default ReviewsList;
