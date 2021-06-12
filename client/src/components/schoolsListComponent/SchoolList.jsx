import React from "react";
import { Link } from "react-router-dom";
import "./SchoolList.css";
import ListedSchool from "../listedSchoolComponent/ListedSchool";

const SchoolList = ({ schools }) => {
  const schoolList = schools.map((school) => (
    <Link key={school.id} to={`/schoolReviews/${school.id}`}>
      <ListedSchool schoolId={school.id} key={school.id} school={school} />
    </Link>
  ));

  return (
    <div>
      <ul>{schoolList}</ul>
    </div>
  );
};

export default SchoolList;
