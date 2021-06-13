import React from "react";
import { Link } from "react-router-dom";
import "./SchoolList.css";
import ListedSchool from "../listedSchool/ListedSchool";
import { useContext } from "react";
import SchoolsContext from "../../context/SchoolsContext";

const SchoolList = () => {
  const { schools } = useContext(SchoolsContext);

  const schoolList = schools.map((school) => (
    <Link key={school.id} to={`/schoolReviews/${school.id}`}>
      <ListedSchool key={school.id} school={school} />
    </Link>
  ));

  return (
    <div>
      <ul>{schoolList}</ul>
    </div>
  );
};

export default SchoolList;
