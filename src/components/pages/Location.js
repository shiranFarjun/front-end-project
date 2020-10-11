
import React, { useState, useEffect } from "react";
import serviceLocation from '../../api/apiLocation/serviceLocation';
import CardDisplayInfo from '../UI/CardDisplayInfo';
import '../UI/card-style.css'
import Routes from '../../router/Routes'

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
    // const [currentCardLocation, setCurrentCardLocation] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCity, setSearchByCity] = useState("");
    const imgSource = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l13, l14, l15, l16, l18, l19, l20, l21, l22, l24, l25, l26]

    useEffect(() => {
        retrieveLocation();
        // console.log(currentCardLocation,currentIndex)
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

    // const refreshList = () => {
    //     retrieveLocation();
    //     setCurrentCardLocation(null);
    //     setCurrentIndex(-1);
    // };

    // const setActiveLocation = (cardLocation, index) => {
    //     setCurrentCardLocation(cardLocation);
    //     setCurrentIndex(index);
    //     console.log('hi you clik on me ',index, cardLocation);
    // };

    // const removeAllLocation = () => {
    //     serviceLocation.removeAllLocation()
    //         .then(response => {
    //             console.log(response.data);
    //             refreshList();
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

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
            <div className="container-search">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by city name"
                    value={searchByCity}
                    onChange={onChangeSearch}
                />
                <div className="button-search">
                    <button
                        type="button"
                        onClick={findByCity}>Search</button>
                </div>
            </div>
            <h1 className="header-view-products"> Rental companies</h1>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="row">
                    {LocationList &&    // onClick={() => setActiveLocation(place, index)}
                        LocationList.map((place, index) => (
                            <li className="col-md-4" key={index}>
                                <CardDisplayInfo img={imgSource[index]} title={place.company} name={place.firstName}
                                 phone={place.phone} path={Routes.viewLocation} lat={place.latitude} lng={place.longitude}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>

    )
};

export default Location;


