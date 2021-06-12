import React from "react";
import ListedReview from "../listedReviewComponent/ListedReview";
import { useEffect, useState } from "react";
import { getSchoolReviews } from "../../services/apiService";

const ReviewsList = (props) => {
  const [reviews, setReviews] = useState([]);

  const schoolId = props.location.pathname.slice(-1);

  console.log(props.location.pathname.slice(-1));

  useEffect(() => {
    getSchoolReviews(schoolId).then((schoolReviews) => {
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
