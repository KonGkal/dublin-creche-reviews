import { FormEvent, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  PropTypes,
} from "react-places-autocomplete";
import { useDispatch } from "react-redux";
import { addNewSchool } from "../../store/schools.store";
import { AppDispatch } from "../../store/store";

const AddSchool = () => {
  const [name, setName] = useState("");
  const [coordinates, setCoordinates] = useState<google.maps.LatLngLiteral>();

  const dispatch = useDispatch<AppDispatch>();

  const addSchoolSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addNewSchool({ name: name, lat: coordinates.lat, lng: coordinates.lng })
    );

    setName("");
  };

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setName(value);
  };

  const searchOptions: PropTypes["searchOptions"] = {
    types: ["establishment"],
    radius: 20000,
    location: new google.maps.LatLng({
      lat: 53.3498053,
      lng: -6.2603097,
    }),
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
