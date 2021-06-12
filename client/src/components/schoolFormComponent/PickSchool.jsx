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
    <select
      value={selectedSchool}
      name="selectedSchool"
      onChange={(e) => setSelectedSchool(e.target.value)}
    >
      {schoolList}
    </select>
  );
};

export default PickSchool;
