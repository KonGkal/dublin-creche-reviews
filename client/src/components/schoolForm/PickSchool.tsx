import { useSelector } from "react-redux";
import { schoolsSelector } from "../../store/store";

const PickSchool = ({ selectedSchool, setSelectedSchool }) => {
  const { schools } = useSelector(schoolsSelector);
  const schoolList = schools.length
    ? schools.map((school) => (
        <option className="search-bar" key={school.id} value={school.id}>
          {school.name.split(",")[0]}
        </option>
      ))
    : null;

  return (
    <div className="pick-school-container">
      <select
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
