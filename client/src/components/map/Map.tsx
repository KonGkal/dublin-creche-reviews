import { GoogleMap, Marker } from "@react-google-maps/api";
import { SchoolInterface } from "../../interfaces/types";

const Map = ({ schoolDetails }: { schoolDetails: SchoolInterface }) => {
  const mapContainerStyle = {
    width: "15em",
    height: "15em",
  };

  const center = {
    lat: schoolDetails?.lat || 53.3498053,
    lng: schoolDetails?.lng || -6.2603097,
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div className="map shadow-and-border">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
