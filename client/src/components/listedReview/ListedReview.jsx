import React from "react";
import "./ListedReview.css";

const ListedReview = ({ review }) => {
  const { facility, staff, services, overall, comment } = review;
  return (
    <li className="listed-reviews">
      <div>Facility: {facility}</div>
      <div>Staff: {staff}</div>
      <div>Services: {services}</div>
      <div>Overall User Rating: {overall}</div>
      <div>{comment}</div>
    </li>
  );
};

export default ListedReview;
