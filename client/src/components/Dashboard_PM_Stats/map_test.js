import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
 
// ES5
// var ReactMapboxGl = require('react-mapbox-gl');
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;
// require('mapbox-gl/dist/mapbox-gl.css');

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
});

export default function Map_SideBar(props) {
  return (
    // in render()
    <Map
      style="mapbox://styles/mapbox/streets-v9"
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  )
};
