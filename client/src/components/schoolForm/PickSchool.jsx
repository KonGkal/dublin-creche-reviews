import { useContext } from "react";
import SchoolsContext from "../../context/SchoolsContext";
import SelectedSchoolContext from "../../context/SelectedSchoolContext";

const PickSchool = () => {
  const { selectedSchool, setSelectedSchool } = useContext(
    SelectedSchoolContext
  );
  const { schools } = useContext(SchoolsContext);
  const schoolList = schools.map((school) => (
    <option className="search-bar" key={school.id} value={school.id}>
      {school.name}
    </option>
  ));

  return (
    <div className="pick-school-container">
      <select
        className="search-bar"
        value={selectedSchool}
        name="selectedSchool"
        onChange={(e) => setSelectedSchool(e.target.value)}
      >
        <option style={{ overflow: "hidden" }} value="0">
          Select a School
        </option>
        {schoolList}
      </select>
    </div>
  );
};

export default PickSchool;
