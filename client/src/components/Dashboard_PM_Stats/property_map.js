
import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import fetchFakeData from "./fetchFakeData";
import Popup from "./Popup";
import "./map.scss";

mapboxgl.accessToken = 'pk.eyJ1IjoiemFocmFhYWFhIiwiYSI6ImNrNjI5czFkcjBjNXIza212dGFweGVkcmMifQ.VOxm_Cmy9VDyGvBcLUqWPA ';

const Map_SideBar = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.3832, 43.6532],
      zoom: 9
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    var address1 = new mapboxgl.Popup({ offset: 25 }).setText(
      '3116 Brando Gateway'
    );
    var address2 = new mapboxgl.Popup({ offset: 25 }).setText(
      '536 Amanda Loaf'
    );
    var address3 = new mapboxgl.Popup({ offset: 25 }).setText(
      '12 University St.'
    );

    var marker = new mapboxgl.Marker()
      .setLngLat([-79.3832, 43.6532])
      .setPopup(address1)
      .addTo(map);

    var marker2 = new mapboxgl.Marker()
      .setLngLat([-79.3891, 43.6418])
      .setPopup(address2)
      .addTo(map);

    var marker3 = new mapboxgl.Marker()
      .setLngLat([-79.4522, 43.7254])
      .setPopup(address3)
      .addTo(map);

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", "random-points-layer", e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });



    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map_SideBar;