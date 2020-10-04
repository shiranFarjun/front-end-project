import React, { Component } from 'react';
import suppliersAPI from '../../../api/suppliersAPI';
import KetteringList from './KetteringList';
import EditKettering from './EditKettering';

class Kettering extends Component {
    state = {
        kettering: [],
        selected: null
    }

    componentDidMount = () => {
        this.fetchAllKettering();
    }

    fetchAllKettering = async () => {
        try {
            const response = await suppliersAPI.get('/kettering');
            if (response.status !== 200) {
                throw response.statusText;
            }
            this.setState({ kettering: response.data });
        } catch (err) {
            console.log(error);
            throw err;
        }
    }

    updateSelected = (id) => {
        const ketteringObj = this.state.kettering.find(obj => obj.id === id);
        if (ketteringObj) {
            this.setState({ selected: ketteringObj });
        }
    }

    deleteObjKettering = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const res = await suppliersAPI.delete(`/kettering/${id}`);
            console.log(res);
            this.fetchAllKettering();
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
                    data={this.state.selected}
                    reset={this.resetSelected}
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

export default Kettering;