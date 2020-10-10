// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// import * as parkData from './data-park.json'


// export default function Map() {
//     const [viewport, setViewport] = useState({
//         width: '100vw',
//         height: '100vh',
//         latitude: 31.7577,
//         longitude: 35.21,
//         zoom: 8
//     });
//     const[selectedPark,stSelectedPark] = useState(null)

//     return (
//         <ReactMapGL
//             {...viewport}
//             mapboxglAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
//             mapStyle='https://api.mapbox.com/styles/v1/shiranfarjun/ckfyabp7q02p719o1fzkpe0up.html?fresh=true&title=view&access_token=pk.eyJ1Ijoic2hpcmFuZmFyanVuIiwiYSI6ImNrZnk5YzgwaDA1c3IydG9ieWQ3YjZsMzUifQ.RHuZGNdnpqlNaqayAk9OaA'
//             onViewportChange={viewport => {
//                 setViewport(viewport)
//             }}>
//             {parkData[0].features.map(park => (
//                 <Marker
//                     key={park.properties.PARK_ID}
//                     latitude={park.geometry.coordinates[1]}
//                     longitude={park.geometry.coordinates[0]}>
//                     <button 
//                     className="marker-button" 
//                     onClick={(e)=>e.preventDefault();
//                     setSelectPark(park)
//                 }>
//                     <img src='../../img/map-arrow.png' alt=' ' /></button>
//                 </Marker>
//             ))}
//         </ReactMapGL>

//     );
// }










// // onViewportChange={nextViewport => setViewport(nextViewport)}




