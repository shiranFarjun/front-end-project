import React, { useState, useEffect } from "react";
import serviceSupplier from '../../api/serviceSupplier'
import { Link } from "react-router-dom";

const Catering= () => {
  const [CateringList, setCateringList] = useState([]);
  const [currentCardCatering, setCurrentCardCatering] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchByCompany, setSearchByCompany] = useState("");

  useEffect(() => {
    retrieveCatering();
  }, []);

  const onChangeSearch = e => {
    const searchCompany = e.target.value;
    setSearchByCompany(searchCompany);
  };

  const retrieveCatering = () => {
    serviceSupplier.getAll(2)       //2  == caring category
      .then(response => {
        setCateringList(response.data);
        console.log('Catering List aet all',response.data);
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

//   const findByCompany = () => {
//     serviceSupplier.findByCompany(searchTitle)
//       .then(response => {
//         setCateringList(response.data);
//         console.log('response.data',response.data);
//         console.log('catering by Company',CateringList)
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

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
            //   onClick={findByCompany}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h2> Catering List</h2>

        <ul className="list-group">
          {CateringList &&
            CateringList.map((catering, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")  //// להבין את השורה הזו 
                }
                onClick={() => setActiveCatering(catering, index)}
                key={index}
              >
                <h3>{catering.nameCompany}</h3>
                <h2>{catering.firstName}{catering.lastName}</h2>
                <img src={catering.avater} width='30px' height='30px'></img>
                <img src={catering.img} width='50px' height='50px'></img>
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
        //   onClick={removeAllCatering}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentCardCatering ? (
          <div>
            <h4>Catering</h4>
            <div>
              <label>
                <strong>Company:</strong>
              </label>{" "}
              {currentCardCatering.nameCompany}
            </div>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentCardCatering.firstName}
            </div>
            <div>
              <label>
                <strong>Last  Name:</strong>
              </label>{" "}
              {currentCardCatering.lastName}
            </div>
            <div>
              <label>
                <strong>Phone:</strong>
              </label>{" "}
              {currentCardCatering.phone}
            </div>

           
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Catering...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catering;
// <Link
// to={"/tutorials/" + currentCardCatering.id}
// className="badge badge-warning"
// >
// Edit
// </Link>


// import React from 'react'
// import '../../app.css'

// export default function Catering(){
//     return <h1 className="Catering">Catering</h1>
// }

