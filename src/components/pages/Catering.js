import React, { useState, useEffect } from "react";
import serviceSupplier from '../../api/serviceSupplier';
import Card from '../UI/CardDisplayInfo';
import '../UI/card-style.css'
import k1 from '../../img/imgCatering/k1.jpg'
import k2 from '../../img/imgCatering/k2.jpg'
import k3 from '../../img/imgCatering/k3.jpg'
import k4 from '../../img/imgCatering/k4.jpg'
import k5 from '../../img/imgCatering/k5.jpg'
import k6 from '../../img/imgCatering/k6.jpg'
import k7 from '../../img/imgCatering/k7.jpg'
import k8 from '../../img/imgCatering/k8.jpg'
import k9 from '../../img/imgCatering/k9.jpg'
import k10 from '../../img/imgCatering/k10.jpg'
import k11 from '../../img/imgCatering/k11.jpg'
import k12 from '../../img/imgCatering/k12.jpg'
import k13 from '../../img/imgCatering/k13.jpg'
import k14 from '../../img/imgCatering/k14.jpg'
import k15 from '../../img/imgCatering/k15.jpg'
import k16 from '../../img/imgCatering/k16.jpg'
import k17 from '../../img/imgCatering/k17.jpg'
import k18 from '../../img/imgCatering/k18.jpg'
import k19 from '../../img/imgCatering/k19.jpg'
import k20 from '../../img/imgCatering/k20.jpg'
import k21 from '../../img/imgCatering/k21.jpg'
import k22 from '../../img/imgCatering/k22.jpg'
import k23 from '../../img/imgCatering/k23.jpg'
import k24 from '../../img/imgCatering/k24.jpg'






const Catering = () => {
    const [CateringList, setCateringList] = useState([]);
    const [currentCardCatering, setCurrentCardCatering] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchByCompany, setSearchByCompany] = useState("");
    const imgSource=[k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13,k14,k15,k16,k17,k18,k19,k20,k21,k22,k23,k24];

    useEffect(() => {
        retrieveCatering();
    }, []);

    const onChangeSearch = e => {
        const searchCompany = e.target.value;
        console.log('searchCompany',searchCompany);
        setSearchByCompany(searchCompany);
    };

    const retrieveCatering = () => {
        serviceSupplier.getAll(1)                  //1  == caring category
            .then(response => {
                setCateringList(response.data);
                console.log('Catering List aet all', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveCatering();
        setCurrentCardCatering(null);
        setCurrentIndex(-1);
    };

    const setActiveCatering = (cardCatering, index) => {
        setCurrentCardCatering(cardCatering);
        setCurrentIndex(index);
    };

    const removeAllCatering = () => {
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
        console.log('in find by',searchByCompany)
        serviceSupplier.findByCompany(1, searchByCompany)
            .then(response => {
                setCateringList(response.data);
                console.log('findByCompany', response.data);
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
                        placeholder="Search by title"
                        value={searchByCompany}
                        onChange={onChangeSearch}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByCompany}
                        >Search</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h1> Catering List</h1>
                <div className="container-fluid d-flex justify-content-center">
                    <ul className="row">
                        {CateringList &&
                            CateringList.map((catering, index) => (
                                <li className="col-md-4" onClick={() => setActiveCatering(catering, index)} key={index}>
                                    <Card img={imgSource[index]} title={catering.company} name={catering.firstName, catering.lastName} phone={catering.phone} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Catering;

// <button
// className="m-3 btn btn-sm btn-danger"
// //   onClick={removeAllCatering}
// >
// Remove All
// </button>
// </div>
// <div className="col-md-6">
// {currentCardCatering ? (
// <div>
//   <h4>Catering</h4>
//   <div>
//     <label>
//       <strong>Company:</strong>
//     </label>{" "}
//     {currentCardCatering.nameCompany}
//   </div>
//   <div>
//     <label>
//       <strong>First Name:</strong>
//     </label>{" "}
//     {currentCardCatering.firstName}
//   </div>
//   <div>
//     <label>
//       <strong>Last  Name:</strong>
//     </label>{" "}
//     {currentCardCatering.lastName}
//   </div>
//   <div>
//     <label>
//       <strong>Phone:</strong>
//     </label>{" "}
//     {currentCardCatering.phone}
//   </div>


// </div>
// ) : (
// <div>
//   <br />
//   <p>Please click on a Catering...</p>
// </div>
// )}
// </div>
// </div>
// );

