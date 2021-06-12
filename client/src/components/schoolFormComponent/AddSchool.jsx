import { useState } from "react";
import { addSchool } from "../../services/apiService";

const AddSchool = ({ setSchools }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const addSchoolSubmitHandler = async (event) => {
    event.preventDefault();

    const newSchool = await addSchool(name, address);
    setSchools((prev) => [...prev, newSchool]);

    setName("");
    setAddress("");
  };
  return (
    <form onSubmit={addSchoolSubmitHandler}>
      <div>
        <h3>School Name</h3>
        <input
          value={name}
          placeholder="Add schools name"
          onChange={(e) => setName(e.target.value)} //check IIFE
          type="text"
        />
        <h3>School Address</h3>
        <input
          value={address}
          placeholder="Add schools address"
          onChange={(e) => setAddress(e.target.value)} //check IIFE
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
