import * as React from 'react';
import { useState,useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}



















///////////////////////////////////////////////////

// import React from "react";
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';


// export default function Map() {

//     const [address, setAddress] = React.useState(" ");
//     const [coordinates, setCoordinate] = React.useState({ lat: null, lng: null });

//     const handleSelect = async value => {
//         const result = await geocodeByAddress(value);
//         const latLng = await getLatLng(result[0]);
//         setAddress(value);
//         setCoordinate(latLng)
//     };
//     return (
//         <div>
//             <PlacesAutocomplete
//                 value={address}
//                 onChange={setAddress}
//                 onSelect={handleSelect}
//             > {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                 <div>
//                     <input {...getInputProps({ placeholder: "Type address" })} />
//                     <div>
//                     </div>

//                     {loading ? <div>Loading...</div> : null}

//                     {suggestions.map((suggestion) => {
//                         const style = {
//                             backgroundColor: suggestions.active ? "#41b6e6" : "fff"
//                         };
//                         return (
//                             <div {...getSuggestionItemProps(suggestions, { style })}>
//                                 {suggestions.description}
//                             </div>
//                         )
//                     })}
//                 </div>
//             )}
//             </PlacesAutocomplete>
//         </div>
//     )
// }







