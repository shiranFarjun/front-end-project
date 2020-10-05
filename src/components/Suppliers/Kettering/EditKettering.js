
import React, { Component } from 'react';
import suppliersAPI from '../../../api/suppliersAPI';
import NewCard from '../../NewCard';

class EditKettering extends Component {

    state = {
        kettering:this.props.kettering,
        selectedSupplier: this.props.selected,
        categoryId: 1,
        namePerson: '',
        nameCompany: '',
        phone: '',
        newNameCompany: '',
        newNamePerson: '',
        newPhone: ''
    }

    componentDidMount = () => {
        console.log('this.state.selectedSupplier', this.state.selectedSupplier)
        this.setDisplayCard();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            kettering : nextProps.kettering
        });
      }

    setDisplayCard = () => {
        const card = this.state.selectedSupplier;
        console.log('card',card);
        if (!card)
            return;
        this.setState({
            namePerson: card.namePerson,
            nameCompany: card.nameCompany,
            phone: card.phone,
            categorySupplierId: 1
        });
    }

    onChangeNewCard = (e) => {
        const form = e.target.parentElement.parentElement;
        this.setState({
            newNamePerson: form.namePerson.value,
            newNameCompany: form.nameCompany.value,
            phone: form.phone.value,
            categoryId: 1
        });
    }

    updateCard = async (e) => {
        console.log('update--->e--<', e)
        try {
            e.preventDefault();
            const idChild= this.state.selectedSupplier.id;
            const dataObj = {
                id: this.state.selectedSupplier.id,
                namePerson: this.state.namePerson,
                nameCompany: this.state.nameCompany,
                phone: this.state.phone,
                categoryId: this.state.categorySupplier
            }
            console.log('idChild',idChild)
            console.log('dataObj',dataObj)
            const res = await suppliersAPI.put(`/${1}/cards-suppliers/${idChild}`, dataObj);
            if (Number(res.status) !== 200)
                return;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    // addNewCard = async (e) => {
    //     try {
    //         this.state.changed = false;
    //         e.preventDefault();
    //         const { newNamePerson, newNameCompany } = this.state;
    //         const data = {
    //             namePerson: newNamePerson,
    //             nameCompany: newNameCompany
    //         }
    //         // console.log(data);
    //         const card = this.state.cards[this.state.currentCard];

    //         const res = await suppliersAPI.post(`/deck/${card.deckId}/card/`, data);
    //         console.log(res);
    //         if (Number(res.status) !== 201)
    //             return;


    //         const newCards = this.state.cards.slice();
    //         newCards.push(res.data);
    //         console.log(newCards);
    //         this.setState({ cards: newCards, newNameCompany: '', newNamePerson: '' })

    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    // deleteCard = async (e) => {
    //     try {
    //         console.log('->delete card in edit kettring data-->e', e);
    //         e.preventDefault();
    //         const idChild= this.state.selectedSupplier.id;
    //         const res = await suppliersAPI.delete(`/${1}/cards-suppliers/${idChild}`)
    //         console.log(res);
    //         if (Number(res.status) !== 200)
    //             return;

    //         // const newArr = this.state.selectedSupplier.filter(obj => obj.id !== card.id);
    //         // this.setState({ card: newArr, selectedOption: 0 });
    //         // this.setDisplayCard(0);
    //     } catch (e) {
    //         console.log(e);
    //         throw e;
    //     }
    // }
    render() {
        // const options = this.state.cards.map((card, index) => {
        //     return {
        //         value: index,
        //         label: `${index}-${card.question}`
        //     };
        // })

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
                        <button onClick={()=>this.props.deleteObj(this.props.data,this.state.selectedSupplier.id,1)} type="delete ui warning">Delete</button>
                    </form>
                </div>


                <NewCard
                    nameCompany={this.state.newNameCompany}
                    namePerson={this.state.newNamePerson}
                    phone={this.state.phone}
                    onSubmit={this.addNewCard}
                />
                <button onClick={this.props.reset}>Main Menu</button>
            </div>
        )
    }
}


export default EditKettering;




//138   <Select
//                             options={options}
//                             onChange={this.OnChangeSelectCard}
//                             value={this.state.selectedOption} />


////////////////////////////////////////////////////////////////////////////////////////






// import React, { Component } from 'react';
// // import Select from 'react-select';
// import suppliersAPI from '../../../api/suppliersAPI';
// import NewCard from '../../NewCard';

// class EditKettering extends Component {

//     state = {
//         selectedSupplier : this.props.data,
//         currentCard: 0,
//         namePerson: '',
//         nameCompany: '',
//         changed: false,
//         selectedOption: 0,
//         newNameCompany: '',
//         newNamePerson: ''
//     }
//     componentDidMount = () => {
//         // console.log(this.props);
//         console.log('this.state.card',this.state.card)
//         this.setDisplayCard(0);
//     }

//     setDisplayCard = (index) => {
//         const card = this.state.card[index];
//         if (!card)
//             return;
//         this.setState({ namePerson: card.namePerson, nameCompany: card.nameCompany, currentCard: index });
//     }

//     OnChangeSelectCard = (selectedOption) => {
//         this.setState({ selectedOption, changed: false });
//         this.setDisplayCard(selectedOption.value);
//         console.log(`Option selected:`, selectedOption);
//     }

//     onChangeInput = (e) => {
//         const form = e.target.parentElement.parentElement;
//         this.setState({
//             namePerson: form.namePerson.value,
//             nameCompany: form.nameCompany.value,
//             changed: true
//         });
//     }

//     onChangeNewCard = (e) => {
//         const form = e.target.parentElement.parentElement;
//         this.setState({
//             newNamePerson: form.namePerson.value,
//             newNameCompany: form.nameCompany.value
//         });
//     }

//     //async crod
//     updateCard = async (e) => {
//         let target = e.target

//         console.log('update--->e--<',target)
//         try {
//             this.state.changed = false;
//             e.preventDefault();
//             const { namePerson, nameCompany } = this.state;
//             const data = {
//                 namePerson: namePerson,
//                 nameCompany: nameCompany
//             }
//             // const card = this.state.card[this.state.currentCard];

//             // const res = await suppliersAPI.put(`/deck/${card.deckId}/card/${card.id}`, data);
//             // if (Number(res.status) !== 200)
//             //     return;

//             // this.state.cards[this.state.currentCard] = res.data;
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     addNewCard = async (e) => {
//         try {
//             this.state.changed = false;
//             e.preventDefault();
//             const { newNamePerson, newNameCompany } = this.state;
//             const data = {
//                 namePerson: newNamePerson,
//                 nameCompany: newNameCompany
//             }
//             // console.log(data);
//             const card = this.state.cards[this.state.currentCard];

//             const res = await suppliersAPI.post(`/deck/${card.deckId}/card/`, data);
//             console.log(res);
//             if (Number(res.status) !== 201)
//                 return;


//             const newCards = this.state.cards.slice();
//             newCards.push(res.data);
//             console.log(newCards);
//             this.setState({ cards: newCards, newNameCompany: '', newNamePerson: '' })

//         } catch (e) {
//             console.log(e);
//         }
//     }
//     deleteCard = async (e) => {

//         try {
//             console.log('->delete',e);

//             // this.state.changed = false;
//             // e.preventDefault();
//             // console.log(e)
//             // const card = this.state.card[this.state.currentCard];
//             // await suppliersAPI.delete(`/${idCategory}/cards-suppliers/${idChild}`)
//             // const res = await suppliersAPI.delete(`/deck/${card.deckId}/card/${card.id}`);
//             // console.log(res);
//             // if (Number(res.status) !== 200)
//             //     return;

//             // const newArr = this.state.cards.filter(c => c.id !== card.id);
//             // this.setState({ card: newArr, selectedOption: 0 });
//             // this.setDisplayCard(0);

//         } catch (e) {
//             console.log(e);
//         }
//     }
//     render() {
//         // const options = this.state.cards.map((card, index) => {
//         //     return {
//         //         value: index,
//         //         label: `${index}-${card.question}`
//         //     };
//         // })

//         const style = {
//             color: 'red',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center'
//         }
//         return (
//             <div className='EditDeck' style={style}>
//                 <div className="card ui" style={{ display: 'inline-block' }}>
//                     <form action="" onSubmit={this.updateCard}>
//                         <h2>Edit Card</h2>

//                         <div className="field">
//                             <label htmlFor="namePerson">Name person</label>
//                             <input
//                                 id="" type="text"
//                                 name="namePerson"
//                                 placeholder="Last Name"
//                                 value={this.state.namePerson}
//                                 onChange={this.onChangeInput}>
//                             </input>
//                         </div>
//                         <div className="field">
//                             <label htmlFor="nameCompany">nameCompany</label>
//                             <input
//                                 id="" type="text"
//                                 name="nameCompany"
//                                 placeholder="Last Name"
//                                 value={this.state.nameCompany}
//                                 onChange={this.onChangeInput}>
//                             </input>
//                         </div>
//                         <button
//                             type="submit"
//                             disabled={!this.state.changed}>Update</button>
//                         <button
//                             onClick={this.deleteCard}
//                             type="delete ui warning"
//                             disabled={!this.state.selectedSupplier.length > 0}>Delete</button>
//                     </form>
//                 </div>


//                 <NewCard
//                     nameCompany={this.state.newNameCompany}
//                     namePerson={this.state.newNamePerson}
//                     onChange={this.onChangeNewCard}
//                     onSubmit={this.addNewCard}
//                 />
//                 <button onClick={this.props.reset}>Main Menu</button>
//             </div>
//         )
//     }
// }


// export default EditKettering;




// //138   <Select
// //                             options={options}
// //                             onChange={this.OnChangeSelectCard}
// //                             value={this.state.selectedOption} />


// ////////////////////////////////////////////////////////////////////////////////////////


