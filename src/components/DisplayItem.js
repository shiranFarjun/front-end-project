import React from 'react';

const DisplayItem = ({ data, onClick, children }) => {
    const style = {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '5px 10px',
        background: '#e5e5e5'
    }

///////////ask eliran

    return (
        <div
            className='DeckItem item'
            style={style}
            onClick={onClick}>

            <div className="content">
                <div className="header"  >{data.name} </div>
                {children}
            </div>
        </div>
    )
}
export default DisplayItem;