import { useEffect, useState } from "react";
import ListedReview from "../listedReview/ListedReview";
import { getSchool } from "../../services/apiService";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneSchoolReviews } from "../../store/schoolReviews.store";
import { AppDispatch, schoolReviewsSelector } from "../../store/store";
import { SchoolInterface, SchoolParams } from "../../interfaces/types";
import Map from "../map/Map";

const ReviewsList = () => {
  const [schoolDetails, setSchoolDetails] = useState<SchoolInterface>();
  const { schoolReviews } = useSelector(schoolReviewsSelector);

  const { schoolId } = useParams<SchoolParams>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOneSchoolReviews(schoolId));

    (async () => {
      const school = await getSchool(schoolId);
      setSchoolDetails(school);
    })();
  }, [schoolId, dispatch]);

  const listOfReviews = schoolReviews.map((review, index) => {
    return <ListedReview key={index} review={review} />;
  });

  const rating = schoolReviews.length
    ? schoolReviews.reduce((acc, cur) => {
        return acc + cur.overall;
      }, 0)
    : null;

  return (
    <>
      <h1 className="header">Reviews</h1>
      <div className="school-list shadow-and-border">
        <h1 className="listed-reviews-header">
          {schoolDetails?.name || "Dublin"}
        </h1>
        <Map schoolDetails={schoolDetails} />
        {rating ? (
          <div className="rating-header-container shadow-and-border">
            <h1 className="listed-reviews-rating-header">
              Overall School Rating:{" "}
              {(rating / schoolReviews.length).toFixed(1)}{" "}
            </h1>
          </div>
        ) : (
          <p className="listed-reviews-rating-header">
            There are no current reviews.
          </p>
        )}
        <div>
          <ul>{listOfReviews}</ul>
        </div>
      </div>
    </>
  );
};

export default ReviewsList;
