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

  let rating;
  if (reviews.length) {
    rating = reviews.reduce((acc, cur) => {
      return acc + cur.overall;
    }, 0);
  }

  return (
    <>
      {rating ? (
        <h1 className="header">
          School rating {(rating / reviews.length).toFixed(1)}{" "}
        </h1>
      ) : (
        <h1 className="header">School rating</h1>
      )}
      <div>
        <ul>{listOfReviews}</ul>
      </div>
    </>
  );
};

export default ReviewsList;
