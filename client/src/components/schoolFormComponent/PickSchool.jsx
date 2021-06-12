import { useState } from "react";

const PickSchool = ({ schools }) => {
  const [selectedSchool, setSelectedSchool] = useState([]);
  console.log(selectedSchool);

  const schoolList = schools.map((school) => (
    <option value={school.id}>{school.name}</option>
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
