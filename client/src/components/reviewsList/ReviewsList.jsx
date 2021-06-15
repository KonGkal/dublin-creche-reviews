import React, { useEffect, useContext, useState } from "react";
import ListedReview from "../listedReview/ListedReview";
import { getSchoolReviews, getSchool } from "../../services/apiService";
import { useParams } from "react-router-dom";
import ReviewsContext from "../../context/ReviewsContext";
import { GoogleMap, Marker } from "@react-google-maps/api";

const ReviewsList = () => {
  const [schoolDetails, setSchoolDetails] = useState([]);
  const { reviews, setReviews } = useContext(ReviewsContext);

  const { schoolId } = useParams();

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
    getSchoolReviews(schoolId).then((schoolReviews) => {
      setReviews(schoolReviews);
    });
    getSchool(schoolId).then((school) => {
      setSchoolDetails(school);
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
              Overall School Rating: {(rating / reviews.length).toFixed(1)}{" "}
            </h1>
          </div>
        ) : (
          <p>There are no current reviews.</p>
        )}
        <div>
          <ul>{listOfReviews}</ul>
        </div>
      </div>
    </>
  );
};

export default ReviewsList;
