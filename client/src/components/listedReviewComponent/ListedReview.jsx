import React from "react";

const ListedReview = ({ review }) => {
  const { facility, staff, services, comment } = review;
  return (
    <li>
      <div>{facility}</div>
      <div>{staff}</div>
      <div>{services}</div>
      <div>{comment}</div>
    </li>
  );
};

export default ListedReview;
