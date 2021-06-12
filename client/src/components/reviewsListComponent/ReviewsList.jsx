import React from "react";
import ListedReview from "../listedReviewComponent/ListedReview";
import { useEffect, useState } from "react";
import { getSchoolReviews } from "../../services/apiService";
import { useParams } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  const { schoolId } = useParams();

  useEffect(() => {
    getSchoolReviews(schoolId).then((schoolReviews) => {
      setReviews(schoolReviews);
    });
  }, [schoolId]);

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
