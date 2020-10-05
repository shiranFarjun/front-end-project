import React, { Component } from 'react';
import suppliersAPI from '../../../api/suppliersAPI';
import KetteringList from './KetteringList';
import EditKettering from './EditKettering';

class CateringFood extends Component {
    state = {
        kettering: [],
        selected: null
    }

    componentDidMount = () => {
        this.fetchAllKettering(1);               
    }

    fetchAllKettering = async (id) => {
        try {
            const response = await suppliersAPI.get(`/${id}/cards-suppliers`);   //id=1 -->will give all ketring ,2-->will give location
            if (response.status !== 200) {
                throw response.statusText;
            }
            this.setState({ kettering: response.data });
            console.log('this.state.kettering success',this.state.kettering );
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    updateSelected = (id) => {
        const ketteringObj = this.state.kettering.find(obj => obj.id === id);
        if (ketteringObj) {
            this.setState({ selected: ketteringObj });
        }
    }

    deleteObjKettering = async (e,idChild,idCategory) => {    ///****** */
        console.log('deleteObj Kettering in food',e)
        // e.preventDefault();
        // e.stopPropagation();
        try {
            const res = await suppliersAPI.delete(`/${idCategory}/cards-suppliers/${idChild}`);
            console.log('sucssess delete',res);
            this.fetchAllKettering(idCategory);
        } catch (err) {
            throw err;
        }
    }

    resetSelected = () => {
        this.setState({ selected: null })
    };

    render() {
        let display;
        if (this.state.selected) {
            display =
                <EditKettering
                data={this.state.kettering}
                    selected={this.state.selected}
                    reset={this.resetSelected}
                    deleteObj={this.deleteObjKettering}
                />
        } else {
            display =
                <KetteringList
                    updateSelected={this.updateSelected}
                    remove={this.deleteObjKettering}
                    data={this.state.kettering}
                    title="Please Selected kettering to Edit"
                />;
        }
        return (
            <div className='kettering ui container'>
                {display}
            </div>
        );
    }
}

export default CateringFood;


