import React, { useState, useEffect } from "react";
import serviceSupplier from '../../api/serviceSupplier';
import Card from '../UI/CardDisplayInfo';
import '../UI/card-style.css'

import d1 from '../../img/imgDesign/d1.jpg'
import d2 from '../../img/imgDesign/d2.jpg'
import d3 from '../../img/imgDesign/d3.jpg'
import d4 from '../../img/imgDesign/d4.jpg'
import d5 from '../../img/imgDesign/d5.jpg'
import d6 from '../../img/imgDesign/d6.jpg'
import d7 from '../../img/imgDesign/d7.jpg'
import d8 from '../../img/imgDesign/d8.jpg'
import d9 from '../../img/imgDesign/d9.jpg'
import d10 from '../../img/imgDesign/d10.jpg'
import d11 from '../../img/imgDesign/d11.jpg'
import d12 from '../../img/imgDesign/d12.jpg'
import d13 from '../../img/imgDesign/d13.jpg'
import d14 from '../../img/imgDesign/d14.jpg'
import d15 from '../../img/imgDesign/d15.jpg'
import d16 from '../../img/imgDesign/d16.jpg'




const Design = () => {
    const [DesignList, setDesignList] = useState([]);
    const [currentCardDesign, setCurrentCardDesign] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCompany, setSearchByCompany] = useState("");
    const imgSource = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16]

    useEffect(() => {
        retrieveDesign();
    }, []);

    const onChangeSearch = e => {
        const searchCompany = e.target.value;
        setSearchByCompany(searchCompany);
    };

    const retrieveDesign = () => {
        serviceSupplier.getAll(2)                  //2  == caring Design
            .then(response => {
                setDesignList(response.data);
                console.log('Design List', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveDesign();
        setCurrentCardDesign(null);
        setCurrentIndex(-1);
    };

    const setActiveDesign = (carDesign, index) => {
        setCurrentCardDesign(carDesign);
        setCurrentIndex(index);
    };

    const removeAllDesign = () => {
        serviceSupplier.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByCompany = () => {
        serviceSupplier.findByCompany(2, searchByCompany)
            .then(response => {
                setDesignList(response.data);
                console.log('findByCompany', response.data);
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
                    placeholder="Search by company name"
                    value={searchByCompany}
                    onChange={onChangeSearch}
                />
                <div className="button-search">
                    <button
                        type="button"
                        onClick={findByCompany}>Search</button>
                </div>
            </div>
            <h1 className="header-view-products"> Company Design</h1>
            <div className="container-fluid d-flex justify-content-center">
                <ul className="row">
                    {DesignList &&
                        DesignList.map((design, index) => (
                            <li className="col-md-4" onClick={() => setActiveDesign(design, index)} key={index}>
                                <Card img={imgSource[index]} title={design.company} name={design.firstName, design.lastName} phone={design.phone} />
                            </li>
                        ))}
                </ul>
            </div>

        </div>
    )
};

export default Design;
