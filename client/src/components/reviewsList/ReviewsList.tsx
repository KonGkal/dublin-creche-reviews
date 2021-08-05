import React, { useEffect, useState } from "react";
import ListedReview from "../listedReview/ListedReview";
import { getSchool } from "../../services/apiService";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";
import { getOneSchoolReviews } from "../../store/schoolReviews.store";
import { schoolReviewsSelector } from "../../store/store";

const ReviewsList = () => {
  const [schoolDetails, setSchoolDetails] = useState<SchoolInterface>();
  const { schoolReviews } = useSelector(schoolReviewsSelector);

  const { schoolId } = useParams<SchoolParams>();
  const dispatch = useDispatch();

  const mapContainerStyle = {
    width: "15em",
    height: "15em",
  };

  const center = {
    lat: schoolDetails.lat || 53.3498053,
    lng: schoolDetails.lng || -6.2603097,
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  useEffect(() => {
    dispatch(getOneSchoolReviews(schoolId));

    getSchool(schoolId).then((school) => {
      setSchoolDetails(school);
    });
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
        <h1 className="listed-reviews-header">{schoolDetails.name}</h1>
        <div className="map shadow-and-border">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>

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
