import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapSection = () => {
  // Replace with your coordinates
  const location = { lat: 40.712776, lng: -74.005974 };

  return (
    <section className="map py-8">
      <div className="container mx-auto px-4">
        <LoadScript
          googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={location}
            zoom={10}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default MapSection;
