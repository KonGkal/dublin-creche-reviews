import { useState } from "react";
import { addSchool } from "../../services/apiService";
import { useContext } from "react";
import SchoolsContext from "../../context/SchoolsContext";

const AddSchool = () => {
  const { setSchools } = useContext(SchoolsContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const addSchoolSubmitHandler = async (event) => {
    event.preventDefault();

    const newSchool = await addSchool(name, address);
    setSchools((prev) => [...prev, newSchool[0]]);

    setName("");
    setAddress("");
  };
  return (
    <form onSubmit={addSchoolSubmitHandler}>
      <div className="school-form-container shadow-and-border">
        <h3>School Name</h3>
        <input
          value={name || ""}
          placeholder="Add schools name"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <h3>School Address</h3>
        <input
          value={address || ""}
          placeholder="Add schools address"
          onChange={(e) => setAddress(e.target.value)}
          type="text"
        />
        <button type="submit" disabled={!name || !address}>
          Add School
        </button>
      </div>
    </form>
  );
};

export default AddSchool;
