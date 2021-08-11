import { FormEvent, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useDispatch } from "react-redux";
import { addNewSchool } from "../../store/schools.store";

const searchOptions: any = {
  types: ["establishment"],
  location: { lat: () => 53.3498053, lng: () => -6.2603097 },
  radius: 20000,
};

const AddSchool = () => {
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const dispatch = useDispatch();

  const addSchoolSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      addNewSchool({ name: name, lat: coordinates.lat, lng: coordinates.lng })
    );

    setName("");
  };

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setName(value);
  };

  return (
    <form onSubmit={addSchoolSubmitHandler}>
      <div className="school-form-container">
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
              <div>
                <input
                  {...getInputProps({ placeholder: "Search School..." })}
                />

                <div>
                  {loading ? <div>Loading...</div> : null}
                  {suggestions.map((suggestion, index) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#00c9ff" : "#fff",
                    };

                    return (
                      <div
                        key={index}
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
