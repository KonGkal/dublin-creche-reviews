import PickSchool from "./PickSchool";
import AddSchool from "./AddSchool";
import "./SchoolFormContainer.css";

const SchoolFormContainer = () => {
  return (
    <div className="school-form-container shadow-and-border">
      <h1 className="form-title">Add a School</h1>
      <AddSchool />
      <h1 className="form-title">Pick a School</h1>
      <PickSchool />
    </div>
  );
};

export default SchoolFormContainer;
