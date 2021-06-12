import PickSchool from "./PickSchool";
import AddSchool from "./AddSchool";

const SchoolFormContainer = ({ schools, setSchools }) => {
  const addSchoolInList = (name, address) => {};
  return (
    <div>
      <h1 className="form-title">Add a School</h1>
      <AddSchool />
      <h1 className="form-title">Pick a School</h1>
      <PickSchool />
    </div>
  );
};

export default SchoolFormContainer;
