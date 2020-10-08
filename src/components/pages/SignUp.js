import React, { useState } from "react";
import '../../app.css'
import './signUp.css'


// import suppliersAPI from '../../api/suppliersAPI';
import serviceSupplier from '../../api/serviceSupplier';

const SignUp = (props) => {
   
    const initialSupplier = {
        firstName: null,
        lastName: "",
        nameCompany: "",
        email: false,
        phone: '',
        category: ''
    };
    const [Supplier, setSupplier] = useState(initialSupplier);

    const handleChange = e => {
        const { name, value } = e.target;
        setSupplier({ ...Supplier, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('on submit', Supplier.category);
        let data = {
            firstName: Supplier.firstName,
            lastName: Supplier.lastName,
            nameCompany: Supplier.nameCompany,
            email: Supplier.email,
            phone: Supplier.phone,
            category: Supplier.category
        }
        console.log('data', data)


        serviceSupplier.create(Supplier.category,data)
            .then(response => {
                setSupplier({
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    nameCompany: response.data.nameCompany,
                    email: response.data.email,
                    phone: response.data.phone,
                    category: response.data.category
                });
                console.log('response.data',response.data);
            })
            .catch(e => {
                console.log(e);
                throw e;
            });
        
            console.log('after on submit ',Supplier)
    };

    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        textAlign: 'center',
        margin: 'auto'
    }

    return (
        <div className="form-container" >
            <form onSubmit={onSubmit} style={style}>
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">First name</label>
                <input className="border py-2 px-3 text-grey-darkest" type="text" name="firstName" onChange={handleChange} />

                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Last name</label>
                <input className="border py-2 px-3 text-grey-darkest" type="text" name="lastName" onChange={handleChange} />

                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Name Company</label>
                <input className="border py-2 px-3 text-grey-darkest" type="text" name="nameCompany" onChange={handleChange} />

                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Email</label>
                <input className="border py-2 px-3 text-grey-darkest" type="text" name="email" onChange={handleChange} />

                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Mobile number</label>
                <input className="border py-2 px-3 text-grey-darkest" type="tel" name="phone" onChange={handleChange} />

                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Category</label>
                <select name="category" onChange={handleChange} >
                    <option value="1">Location</option>
                    <option value="2">Catering food</option>
                    <option value="3">Design</option>
                </select>


                <button type="submit" className="block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded">Submit</button>
            </form>
        </div>
    )
}
export default SignUp

