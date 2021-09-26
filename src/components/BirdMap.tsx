import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect, useState } from 'react';
import { IBird } from '../types/birds';

export interface IBirdMapProps {
  bird: IBird,
}

const loader = new Loader({
  apiKey: "AIzaSyCDIspC2Osy3Rx5bAEkyIpl8KTlqbFx1Lk",
  version: "weekly",
});

export const BirdMap: React.FC<IBirdMapProps> = ({ bird }) => {
  const { lat, lng } = bird.location;

  const [map, setMap] = useState<any>();
  const [googleMaps, setGoogleMaps] = useState<any>();

  const updateMap = () => {

  }

  useEffect(() => {
    loader.load().then((google) => {

      setGoogleMaps(google.maps);


      console.log('google', google)
      const gmap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat, lng },
        zoom: 8,
      });
      setMap(gmap);

      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: bird.name,
      });
    });


  }, [])

  useEffect(() => {
    // recenter here
  }, [bird])

  return (
    <>
      <div className="bird-map">
        {/* google maps renders here */}
        <div id="map"></div>
      </div>
    </>
  );
};
