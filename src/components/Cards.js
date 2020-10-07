import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../img/k1.jpg'
import img2 from '../img/hopa.jpg'
import img3 from '../img/location.jpg'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img3}
                            text='Fall in love             eadf '
                            label='Location'
                            path='/Location'
                        />
                        <CardItem
                            src={img1}
                            text='Eat  sadbqakjsd,bnma.s'
                            label='Catering                  '
                            path='/Catering food'
                        />
                        <CardItem
                            src={img2}
                            text='Eexcited kashckuadhdsmbsne,a    '
                            label='Design'
                            path='/Design'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
