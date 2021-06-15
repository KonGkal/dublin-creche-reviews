import React, { useEffect, useContext, useState } from "react";
import ListedReview from "../listedReview/ListedReview";
import { getSchoolReviews, getSchool } from "../../services/apiService";
import { useParams } from "react-router-dom";
import ReviewsContext from "../../context/ReviewsContext";
import { GoogleMap } from "@react-google-maps/api";
import SchoolsContext from "../../context/SchoolsContext";

const ReviewsList = () => {
  const [schoolDetails, setSchoolDetails] = useState([]);
  const { reviews, setReviews } = useContext(ReviewsContext);
  const { schools } = useContext(SchoolsContext);

  const { schoolId } = useParams();
  // if (schools) {
  //     schools.filter((school) => school["id"] == schoolId)
  // }

  const location = schools.filter((school) => school["id"] === schoolId);

  console.log(location);

  if (schoolDetails) console.log(typeof schoolDetails.lat);

  const mapContainerStyle = {
    width: "18em",
    height: "18em",
  };

  const center = {
    lat: +schoolDetails.lat,
    lng: +schoolDetails.lng,
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
        {rating ? (
          <h1 className="listed-reviews-header">
            Overall School Rating: {(rating / reviews.length).toFixed(1)}{" "}
          </h1>
        ) : (
          <p>There are no current reviews.</p>
        )}
        <div>
          <ul>{listOfReviews}</ul>
        </div>
      </div>
      <div className="map shadow-and-border">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
        ></GoogleMap>
      </div>
    </>
  );
};

export default ReviewsList;
