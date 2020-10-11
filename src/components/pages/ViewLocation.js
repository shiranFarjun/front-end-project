import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import fetchFakeData from '../../api/fetchFakeData'
import Popup from '../map/Popup'
import Marker from '../map/Marker'
import '../../app.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const ViewLocation = (props) => {

    // console.log(,);
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));  //// offset puts the popup 15px above the feature
    useEffect(() => {
        const features = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",        // there are different geometry types, but Point is best  for this use case of simple latitude/longitude pairs
                        "coordinates": [props.location.param1[0], props.location.param1[1]] // longitude, latitude
                    },
                    "properties": {
                        // you can put almost anything here, it's kind of like
                        // the "metadata" for the feature
                        "name": "Some Cool Point"
                    }
                }
            ]
        }
        // console.log(features.features[0].geometry.coordinates)
        const map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: features.features[0].geometry.coordinates,
            zoom: 9 // starting zoom
        });


        // add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        map.on('moveend', async () => {
            // get center coordinates
            const { lng, lat } = map.getCenter();
            //create marker node
            const markerNode = document.createElement('div');
            ReactDOM.render(<Marker id={1} />, markerNode);
            // add marker to map
            new mapboxgl.Marker(markerNode)
                .setLngLat([props.location.param1[0], props.location.param1[1]])
                .addTo(map);
        });


        // // add navigation control (the +/- zoom buttons)
        // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        // map.on('moveend', async () => {
        //     // get center coordinates
        //     const { lng, lat } = map.getCenter();
        //     // fetch new data
        //     const results = await fetchFakeData({ longitude: lng, latitude: lat });
        //     // iterate through the feature collection and append marker to the map for each feature
        //     results.features.forEach(result => {
        //         const { id, geometry } = result;
        //         // create marker node
        //         const markerNode = document.createElement('div');
        //         ReactDOM.render(<Marker id={id} />, markerNode);
        //         // add marker to map
        //         new mapboxgl.Marker(markerNode)
        //             .setLngLat([props.location.param1[0], props.location.param1[1]])
        //             .addTo(map);
        //     });
        // });
        map.on('load', () => {
            // add the data source for new a feature collection with no features
            map.addSource('random-points-data', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [],
                },
            });
            // now add the layer, and reference the data source above by name
            map.addLayer({
                id: 'random-points-layer',
                source: 'random-points-data',
                type: 'symbol',
                layout: {
                    // full list of icons here: https://labs.mapbox.com/maki-icons
                    'icon-image': 'bakery-15', // this will put little croissants on our map
                    'icon-padding': 0,
                    'icon-allow-overlap': true,
                },
            });
        });
        map.on('moveend', async () => {
            // get new center coordinates
            const { lng, lat } = map.getCenter();
            // fetch new data
            const results = await fetchFakeData(lng, lat);
            // update "random-points-data" source with new data
            // all layers that consume the "random-points-data" data source will be updated automatically
            map.getSource('random-points-data').setData(results);
        });
        // add popup when user clicks a point
        map.on('click', 'random-points-layer', e => {
            if (e.features.length) {
                const feature = e.features[0];
                // create popup node
                const popupNode = document.createElement('div');
                ReactDOM.render(<Popup feature={feature} />, popupNode);
                // set popup on map
                popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
            }
        });
        // change cursor to pointer when user hovers over a clickable feature
        map.on('mouseenter', 'random-points-layer', e => {
            if (e.features.length) {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        // reset cursor to default when user is no longer hovering over a clickable feature
        map.on('mouseleave', 'random-points-layer', () => {
            map.getCanvas().style.cursor = '';
        });

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div id="map" className="map-container" ref={mapContainerRef} />
            <div className=" Specific-location-information">
                <h2>{props.location.param3}</h2>
                <h3>{props.location.param4}</h3>
                <h4>{props.location.param5}</h4>
            </div>
        </div>

    )

};

export default ViewLocation;








