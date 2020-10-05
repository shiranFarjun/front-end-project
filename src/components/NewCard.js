import React from 'react';

import React from 'react';
const NewCard = props => {
    return (
        <div className='NewCard ui card'  style={{display:'inline-block'}}>
            <h2>Add New Card</h2>
            <form action="" onSubmit={props.addNewCard}>
                        <div className="field">
                            <label htmlFor="namePerson">Name person</label>
                            <input
                                type="text"
                                value={props.namePerson}
                                onChange={e => this.setState({ namePerson: e.target.value })}>
                            </input>
                        </div>
                        <div className="field">
                            <label htmlFor="nameCompany">name Company</label>
                            <input
                                type="text"
                                value={props.nameCompany}
                                onChange={e => this.setState({ nameCompany: e.target.value })}>
                            </input>
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input
                                type="text"
                                value={props.phone}
                                onChange={e => this.setState({ phone: e.target.value })}>
                            </input>
                        </div>
                        <button type="submit">Add Card</button>
                    </form>
        </div>
    )
}
export default NewCard;