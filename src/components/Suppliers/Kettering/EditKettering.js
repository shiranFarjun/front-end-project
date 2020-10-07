
import React, { Component } from 'react';
import suppliersAPI from '../../../api/suppliersAPI';
// import NewCard from '../../NewCard';

class EditKettering extends Component {

    state = {
        kettering: this.props.kettering,
        selectedSupplier: this.props.selected,
        categoryId: 1,
        namePerson: '',
        nameCompany: '',
        phone:'',
        newNameCompany: '',
        newNamePerson: '',
        newPhone: ''
    }

    componentDidMount = () => {
        this.setDisplayCard();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            kettering: nextProps.kettering
        });
    }

    setDisplayCard = () => {
        const card = this.state.selectedSupplier;
        if (!card)
            return;
        this.setState({
            namePerson: card.namePerson,
            nameCompany: card.nameCompany,
            phone: card.phone,
            categorySupplierId: 1
        });
    }

    // onChangeNewCard = (e) => {
    //     const form = e.target.parentElement.parentElement;
    //     this.setState({
    //         newNamePerson: form.namePerson.value,
    //         newNameCompany: form.nameCompany.value,
    //         phone: form.phone.value,
    //         categoryId: 1
    //     });
    // }

    updateCard = async (e) => {
        console.log('update--->e--<', e)
        try {
            e.preventDefault();
            const idChild = this.state.selectedSupplier.id;
            const dataObj = {
                id: this.state.selectedSupplier.id,
                namePerson: this.state.namePerson,
                nameCompany: this.state.nameCompany,
                phone: this.state.phone,
                categoryId: this.state.categorySupplier
            }
            console.log('idChild', idChild)
            console.log('dataObj', dataObj)
            const res = await suppliersAPI.put(`/${1}/cards-suppliers/${idChild}`, dataObj);
            if (Number(res.status) !== 200)
                return;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    addNewCard = async (e) => {
        try {
            const idChild = this.state.selectedSupplier.id;
            e.preventDefault();
            const dataObj = {
                id: this.state.selectedSupplier.id,
                namePerson: this.state.namePerson,
                nameCompany: this.state.nameCompany,
                phone: this.state.phone,
                categoryId: this.state.categorySupplier
            }
            console.log('idChild', idChild)
            console.log('dataObj', dataObj)
            const res = await suppliersAPI.post(`/${1}/cards-suppliers/${idChild}`, dataObj);
            if (Number(res.status) !== 200)
                return;
            this.setState({newNameCompany: '', newNamePerson: '',phone: '' })

        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    render() {
        const style = {
            color: 'red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
        return (
            <div className='EditDeck' style={style}>
                <div className="card ui" style={{ display: 'inline-block' }}>
                    <form action="" onSubmit={this.updateCard}>
                        <h2>Edit the suppliers details:</h2>

                        <div className="field">
                            <label htmlFor="namePerson">Name person</label>
                            <input
                                type="text"
                                value={this.state.namePerson}
                                onChange={e => this.setState({ namePerson: e.target.value })}>
                            </input>
                        </div>
                        <div className="field">
                            <label htmlFor="nameCompany">name Company</label>
                            <input
                                type="text"
                                value={this.state.nameCompany}
                                onChange={e => this.setState({ nameCompany: e.target.value })}>
                            </input>
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input
                                type="text"
                                value={this.state.phone}
                                onChange={e => this.setState({ phone: e.target.value })}>
                            </input>
                        </div>
                        <button type="submit">Update</button>
                        <button onClick={() => this.props.deleteObj(this.props.data, this.state.selectedSupplier.id, 1)} type="delete ui warning">Delete</button>
                    </form>
                </div>
               
                <button onClick={this.props.reset}>Main Menu</button>
            </div>
        )
    }
}


export default EditKettering;
  


////////////           חשוב!!! ליצור אוביקט חדש !!

// <NewCard
// nameCompany={this.state.newNameCompany}
// namePerson={this.state.newNamePerson}
// phone={this.state.phone}
// onChange={this.onChangeNewCard}
// onSubmit={this.addNewCard}
// />