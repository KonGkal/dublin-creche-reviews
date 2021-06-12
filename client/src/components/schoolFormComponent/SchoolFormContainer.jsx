import PickSchool from "./PickSchool";
import AddSchool from "./AddSchool";

const SchoolFormContainer = ({
  schools,
  setSchools,
  selectedSchool,
  setSelectedSchool,
}) => {
  return (
    <div>
      <h1 className="form-title">Add a School</h1>
      <AddSchool setSchools={setSchools} />
      <h1 className="form-title">Pick a School</h1>
      <PickSchool
        selectedSchools={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        schools={schools}
      />
    </div>
  );
};

export default SchoolFormContainer;
