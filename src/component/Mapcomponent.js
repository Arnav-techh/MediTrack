import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const MapComponent = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const rehabCenters = [
    { id: 1, name: "ABC Rehab Center", lat: 28.6139, lng: 77.2090, contact: "1234567890" },
    { id: 2, name: "XYZ Recovery Center", lat: 28.7041, lng: 77.1025, contact: "9876543210" }
  ];

  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 28.6139, // Default latitude (New Delhi Example)
    lng: 77.2090, // Default longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyANFxpRn2OIrcCoWe-QyOZnWJNXmfqVrSY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {rehabCenters.map((center) => (
          <Marker
            key={center.id}
            position={{ lat: center.lat, lng: center.lng }}
            onClick={() => setSelectedCenter(center)}
          />
        ))}

        {selectedCenter && (
          <InfoWindow
            position={{ lat: selectedCenter.lat, lng: selectedCenter.lng }}
            onCloseClick={() => setSelectedCenter(null)}
          >
            <div>
              <h4>{selectedCenter.name}</h4>
              <p>Contact: {selectedCenter.contact}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
