import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import rehabCenters from "./RehabCenters.json";

const mapContainerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 20.5937, lng: 78.9629 }; // Centered in India

export default function FindRehab() {
  const [search, setSearch] = useState("");
  const [filteredCenters, setFilteredCenters] = useState(rehabCenters);

  const handleSearch = () => {
    const results = rehabCenters.filter((center) =>
      center.name.toLowerCase().includes(search.toLowerCase()) ||
      center.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCenters(results);
  };

  return (
    <div className="container mt-4">
      <div className="common-heading-container">
      <h2 className="text-center mb-4 common-heading">Find a Rehab Center</h2>
      </div>
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search by center name or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={handleSearch} style={{backgroundColor:"#00a8a8", color: "#fff"}}>
            Search
          </button>
        </div>
      </div>

      <div className="row">
        {/* List of Rehab Centers */}
        <div className="col-md-5">
          <div className="list-group">
            {filteredCenters.length > 0 ? (
              filteredCenters.map((center) => (
                <div key={center.id} className="card mb-3">
                  <img src={center.image} alt={center.name} className="card-img-top" style={{ height: "150px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{center.name}</h5>
                    <p className="card-text">{center.address}</p>
                    <div className="d-flex justify-content-between">
                      <a href={`tel:${center.phone}`} className="btn btn-success">Call</a>
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-info"
                      >
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No results found.</p>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="col-md-7">
          <LoadScript googleMapsApiKey="AIzaSyANFxpRn2OIrcCoWe-QyOZnWJNXmfqVrSY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={5}>
              {filteredCenters.map((center) => (
                <Marker key={center.id} position={{ lat: center.lat, lng: center.lng }} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
