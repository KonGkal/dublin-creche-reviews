import React from "react";
import { Link } from "react-router-dom";
import "./SchoolList.css";
import ListedSchool from "../listedSchoolComponent/ListedSchool";

const SchoolList = ({ schools }) => {
  const schoolList = schools.map((school) => (
    <Link to="/schoolReviews/:SchoolId">
      <ListedSchool
        key={school.id}
        school={school}
        onClick={console.log(school.id)}
      />
    </Link>
  ));

  return (
    <div>
      <ul>{schoolList}</ul>
    </div>
  );
};

export default SchoolList;
