import React from "react";
import "./ListedReview.css";

const ListedReview = ({ review }) => {
  const { facility, staff, services, comment } = review;
  return (
    <li className="listed-reviews">
      <div>Facility: {facility}</div>
      <div>Staff: {staff}</div>
      <div>Services: {services}</div>
      <div>Overall User: {(facility + staff + services) / 3}</div>
      <div>{comment}</div>
    </li>
  );
};

export default ListedReview;
