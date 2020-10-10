import React from 'react'
import { Link } from 'react-router-dom';


function CardDisplayInfo(props) {
    return (
        <>
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.img} alt="" className="card-img-top"></img>
                </div>
                <div className="card-body text-dark">
                    <h2 className="card-title">{props.title}</h2>
                    <h3 className="card-text text-secondary">{props.name}</h3>
                    <p className="card-text text-secondary">{props.phone}</p>
                    <Link to={props.path} className='btn-mobile'>הצג פרטים</Link>
                </div>
            </div>
        </>
    )
}


export default CardDisplayInfo;

