import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const rehabCenters = [
  { id: 1, name: "Hope Rehab Center", lat: 28.7041, lng: 77.1025, address: "Delhi, India", phone: "+91 9876543210" },
  { id: 2, name: "Wellness Recovery", lat: 19.076, lng: 72.8777, address: "Mumbai, India", phone: "+91 9988776655" },
  { id: 3, name: "New Life Care", lat: 13.0827, lng: 80.2707, address: "Chennai, India", phone: "+91 9123456789" },
];

const containerStyle = { width: "100%", height: "400px" };
const center = { lat: 22.3511, lng: 78.6677 }; // Default India center

const RehabCenters = () => {
  const [search, setSearch] = useState("");
  const filteredCenters = rehabCenters.filter(center => center.address.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Rehabilitation Centers</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Location..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Map Section */}
      <LoadScript googleMapsApiKey="AIzaSyANFxpRn2OIrcCoWe-QyOZnWJNXmfqVrSY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {filteredCenters.map((center) => (
            <Marker key={center.id} position={{ lat: center.lat, lng: center.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>

      {/* List of Centers */}
      <div className="mt-4">
        {filteredCenters.length > 0 ? (
          filteredCenters.map((center) => (
            <div key={center.id} className="border p-3 mb-2 rounded-lg">
              <h3 className="text-lg font-semibold">{center.name}</h3>
              <p>{center.address}</p>
              <p className="text-blue-500">📞 {center.phone}</p>
            </div>
          ))
        ) : (
          <p>No rehabilitation centers found in this location.</p>
        )}
      </div>
    </div>
  );
};

export default RehabCenters;
