const PickSchool = ({ schools, selectedSchool, setSelectedSchool }) => {
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
