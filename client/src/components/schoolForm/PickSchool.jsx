import { useContext } from "react";
import SchoolsContext from "../../context/SchoolsContext";
import SelectedSchoolContext from "../../context/SelectedSchoolContext";

const PickSchool = () => {
  const { selectedSchool, setSelectedSchool } = useContext(
    SelectedSchoolContext
  );
  const { schools } = useContext(SchoolsContext);
  const schoolList = schools.map((school) => (
    <option key={school.id} value={school.id}>
      {school.name}
    </option>
  ));

  return (
    <div className="school-form-container shadow-and-border pick-school-container">
      <select
        value={selectedSchool}
        name="selectedSchool"
        onChange={(e) => setSelectedSchool(e.target.value)}
      >
        <option value="0">Select a School</option>
        {schoolList}
      </select>
    </div>
  );
};

export default PickSchool;
