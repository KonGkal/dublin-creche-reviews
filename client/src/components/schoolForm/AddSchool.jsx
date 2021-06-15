import { useState } from "react";
import { addSchool } from "../../services/apiService";
import { useContext } from "react";
import SchoolsContext from "../../context/SchoolsContext";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const AddSchool = () => {
  const { setSchools } = useContext(SchoolsContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const addSchoolSubmitHandler = async (event) => {
    event.preventDefault();

    const newSchool = await addSchool(name, address);
    setSchools((prev) => [...prev, newSchool[0]]);

    setName("");
    setAddress("");
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setAddress(value);
  };

  return (
    <form onSubmit={addSchoolSubmitHandler}>
      <div className="school-form-container">
        <h3>Search with google places</h3>
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({ placeholder: "Search School..." })}
                />

                <div>
                  {loading ? <div>Loading...</div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#00c9ff" : "#fff",
                    };

                    return (
                      <div
                        key={suggestion.place_id}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <h3>School Name</h3>
        <input
          value={name || ""}
          placeholder="Add schools name"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <h3>School Address</h3>
        {/* <input
          value={address || ""}
          placeholder="Add schools address"
          onChange={(e) => setAddress(e.target.value)}
          type="text"
        /> */}
        <button type="submit" disabled={!name || !address}>
          Add School
        </button>
      </div>
    </form>
  );
};

export default AddSchool;
