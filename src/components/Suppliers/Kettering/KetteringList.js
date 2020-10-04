import React from 'react';
import DisplayItem from '../../DisplayItem';

const KetteringList = props => {
    const createCards = (arr) => {
        return arr.map(obj => {
            return (
                <DisplayItem
                    key={obj.id}
                    onClick={() => props.updateSelected(obj.id)} data={obj} >
                    {
                        props.remove && <button onClick={(e) => props.remove(e, obj.id)}>Remove</button>
                    }
                </DisplayItem>
            )
        })
    }
    return (
        <div className='kettering List ui items'>

            <h1>{props.title}</h1>
            {createCards(props.data)}
        </div>
    )
}
export default KetteringList;