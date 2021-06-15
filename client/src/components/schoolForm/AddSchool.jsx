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
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const addSchoolSubmitHandler = async (event) => {
    event.preventDefault();

    const newSchool = await addSchool(name, coordinates.lat, coordinates.lng);
    setSchools((prev) => [...prev, newSchool[0]]);

    setName("");
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setName(value);
  };

  const searchOptions = {
    types: ["establishment"],
    location: { lat: () => 53.3498053, lng: () => -6.2603097 },
    radius: 20000,
  };

  return (
    <form onSubmit={addSchoolSubmitHandler}>
      <div className="school-form-container">
        <h3>Search with google places</h3>
        <div>
          <PlacesAutocomplete
            value={name}
            onChange={setName}
            onSelect={handleSelect}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="search-bar">
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
        <button type="submit" disabled={!name}>
          Add School
        </button>
      </div>
    </form>
  );
};

export default AddSchool;
