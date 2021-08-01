import React from "react";
import { Link } from "react-router-dom";
import ListedSchool from "../listedSchool/ListedSchool";
import { useSelector } from "react-redux";

const SchoolList = () => {
  const { allSchools } = useSelector((state) => state.allSchools);

  const schoolList = allSchools.map((school) => (
    <Link key={school.id} to={`/schoolReviews/${school.id}`}>
      <ListedSchool key={school.id} school={school} />
    </Link>
  ));

  return (
    <>
      <h1 className="header">Schools</h1>
      <div className="school-list shadow-and-border">
        <ul>{schoolList}</ul>
      </div>
    </>
  );
};

export default SchoolList;
