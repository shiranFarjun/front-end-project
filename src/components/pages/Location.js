
import React, { useState,useEffect } from "react";
import serviceLocation from '../../api/apiLocation/serviceLocation';
import CardDisplayInfo from '../UI/CardDisplayInfo';
import '../UI/card-style.css'

import l1 from '../../img/imgLoc/l1.jpg'
import l2 from '../../img/imgLoc/l2.jpg'
import l3 from '../../img/imgLoc/l3.jpg'
import l4 from '../../img/imgLoc/l4.jpg'
import l5 from '../../img/imgLoc/l5.jpg'
import l6 from '../../img/imgLoc/l6.jpg'
import l7 from '../../img/imgLoc/l7.jpg'
import l8 from '../../img/imgLoc/l8.jpg'
import l9 from '../../img/imgLoc/l9.jpg'
import l10 from '../../img/imgLoc/l10.jpg'
import l11 from '../../img/imgLoc/l11.jpg'
import l13 from '../../img/imgLoc/l13.jpg'
import l14 from '../../img/imgLoc/l14.jpg'
import l15 from '../../img/imgLoc/l15.jpg'
import l16 from '../../img/imgLoc/l16.jpg'
import l18 from '../../img/imgLoc/l18.jpg'
import l19 from '../../img/imgLoc/l19.jpg'
import l20 from '../../img/imgLoc/l20.jpg'
import l21 from '../../img/imgLoc/l21.jpg'
import l22 from '../../img/imgLoc/l22.jpg'
import l24 from '../../img/imgLoc/l24.jpg'
import l25 from '../../img/imgLoc/l25.jpg'
import l26 from '../../img/imgLoc/l26.jpg'





const Location = () => {
    const [LocationList, setLocationList] = useState([]);
    const [currentCardLocation, setCurrentCardLocation] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCity, setSearchByCity] = useState("");
    const imgSource = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l13, l14, l15, l16, l18,l19,l20,l21,l22,l24,l25,l26]

    useEffect(() => {
        retrieveLocation();
    }, []);

    const onChangeSearch = e => {
        const searchCity = e.target.value;
        setSearchByCity(searchCity);
    };

    const retrieveLocation = () => {
        serviceLocation.getAllLocations()                
            .then(response => {
                setLocationList(response.data);
                console.log('Location List', response.data);
            })
            .catch(e => {
                console.log(e);
                throw e;
            });
    };

    const refreshList = () => {
        retrieveLocation();
        setCurrentCardLocation(null);
        setCurrentIndex(-1);
    };

    const setActiveLocation = (cardLocation, index) => {
        setCurrentCardLocation(cardLocation);
        setCurrentIndex(index);
    };

    const removeAllLocation = () => {
        serviceLocation.removeAllLocation()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByCity = () => {
        serviceLocation.findByCity(searchByCity)
            .then(response => {
                setLocationList(response.data);
                console.log('findByCity', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by city name"
                        value={searchByCity}
                        onChange={onChangeSearch}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByCity}>Search</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="container-fluid d-flex justify-content-center">
                    <ul className="row">
                        {LocationList &&
                            LocationList.map((place, index) => (
                                <li className="col-md-4" onClick={() => setActiveLocation(place, index)} key={index}>
                                    <CardDisplayInfo img={imgSource[index]} title={place.company} name={place.firstName, place.lastName} phone={place.phone} path={'./ViewLocation'}/>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Location;




// import React, { useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';

// import fetchFakeData from '../../api/fetchFakeData'
// import Popup from '../map/Popup'
// import Marker from '../map/Marker'



// import '../../app.css'

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// const Location = () => {
//     const mapContainerRef = useRef(null);
//     const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));  //// offset puts the popup 15px above the feature

//     useEffect(() => {
//         const features = {
//             "type": "FeatureCollection",
//             "features": [
//                 {
//                     "type": "Feature",
//                     "geometry": {
//                         "type": "Point",        // there are different geometry types, but Point is best  for this use case of simple latitude/longitude pairs
//                         "coordinates": [35.21, 31.771] // longitude, latitude
//                     },
//                     "properties": {
//                         // you can put almost anything here, it's kind of like
//                         // the "metadata" for the feature
//                         "name": "Some Cool Point"
//                     }
//                 }
//             ]
//         }
//         console.log(features.features[0].geometry.coordinates)
//         const map = new mapboxgl.Map({
//             container: 'map', // container id
//             style: 'mapbox://styles/mapbox/streets-v11', // style URL
//             // center: features.features[0].geometry.coordinates,
//             center: [35.21, 31.771],
//             zoom: 9 // starting zoom
//         });


//         // add navigation control (the +/- zoom buttons)
//         map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
//         map.on('moveend', async () => {
//             // get center coordinates
//             const { lng, lat } = map.getCenter();
//             // fetch new data
//             const results = await fetchFakeData({ longitude: lng, latitude: lat });
//             // iterate through the feature collection and append marker to the map for each feature
//             results.features.forEach(result => {
//                 const { id, geometry } = result;
//                 // create marker node
//                 const markerNode = document.createElement('div');
//                 ReactDOM.render(<Marker id={id} />, markerNode);
//                 // add marker to map
//                 new mapboxgl.Marker(markerNode)
//                     .setLngLat(geometry.coordinates)
//                     .addTo(map);
//             });
//         });
//         map.on('load', () => {
//             // add the data source for new a feature collection with no features
//             map.addSource('random-points-data', {
//                 type: 'geojson',
//                 data: {
//                     type: 'FeatureCollection',
//                     features: [],
//                 },
//             });
//             // now add the layer, and reference the data source above by name
//             map.addLayer({
//                 id: 'random-points-layer',
//                 source: 'random-points-data',
//                 type: 'symbol',
//                 layout: {
//                     // full list of icons here: https://labs.mapbox.com/maki-icons
//                     'icon-image': 'bakery-15', // this will put little croissants on our map
//                     'icon-padding': 0,
//                     'icon-allow-overlap': true,
//                 },
//             });
//         });
//         map.on('moveend', async () => {
//             // get new center coordinates
//             const { lng, lat } = map.getCenter();
//             // fetch new data
//             const results = await fetchFakeData(lng, lat);
//             // update "random-points-data" source with new data
//             // all layers that consume the "random-points-data" data source will be updated automatically
//             map.getSource('random-points-data').setData(results);
//         });
//         // add popup when user clicks a point
//         map.on('click', 'random-points-layer', e => {
//             if (e.features.length) {
//                 const feature = e.features[0];
//                 // create popup node
//                 const popupNode = document.createElement('div');
//                 ReactDOM.render(<Popup feature={feature} />, popupNode);
//                 // set popup on map
//                 popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
//             }
//         });
//         // change cursor to pointer when user hovers over a clickable feature
//         map.on('mouseenter', 'random-points-layer', e => {
//             if (e.features.length) {
//                 map.getCanvas().style.cursor = 'pointer';
//             }
//         });

//         // reset cursor to default when user is no longer hovering over a clickable feature
//         map.on('mouseleave', 'random-points-layer', () => {
//             map.getCanvas().style.cursor = '';
//         });

//         // clean up on unmount
//         return () => map.remove();
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     return (
//         <div>
//             <div id="map" className="map-container" ref={mapContainerRef} />

//             <form onSubmit={console.log('form')} class="flex-form">
//                 <label for="from">
//                     <i class="ion-location"></i>
//                 </label>
//                 <input type="search" placeholder="Where do you want to go?" />
//                 <input type="submit" value="Search" />
//             </form>

//         </div>

//     )

// };

// export default Location;








