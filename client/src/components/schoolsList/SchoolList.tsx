import { Link } from "react-router-dom";
import ListedSchool from "../listedSchool/ListedSchool";
import { useSelector } from "react-redux";
import { schoolsSelector } from "../../store/store";

const SchoolList = () => {
  const { schools } = useSelector(schoolsSelector);

  const schoolList = schools.map((school) => (
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
