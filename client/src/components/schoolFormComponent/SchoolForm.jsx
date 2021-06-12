import PickSchool from "./PickSchool";
import AddSchool from "./AddSchool";

const SchoolForm = () => {
  return (
    <div>
      <h1 className="form-title">Create a Review</h1>
      <AddSchool />
      <PickSchool />
    </div>
  );
};

export default SchoolForm;
