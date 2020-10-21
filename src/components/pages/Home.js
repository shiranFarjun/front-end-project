import React, { useEffect, useState } from "react";
import api from '../../api/apiOption'
import {Button} from './../Button'

function Home() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');

    const onSubmit = data => {
        data.preventDefault();
        createUser();
    };

    const createUser = () => {
        api.create(name)
            .then(response => {
                console.log('create user', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    // useEffect(() => {


    // }, [])

    return (
        <div>
            <form className="form-container" onSubmit={onSubmit}>
                <input name="firstName" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <input name="lastName" value={userName} type="text" name="userName" onChange={(e) => setUserName(e.target.value)} />
                <input type="submit" />
            </form>

            <Button
                path='/firstPage'
                className='btns'
                buttonStyle='btn-outline'
                buttonSize='btn-large'>Start quiz
            </Button>
        </div>

    );
};

















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     // Note: the empty deps array [] means
//     // this useEffect will run once
//     // similar to componentDidMount()
//     useEffect(() => {
// axios.get("https://fathomless-meadow-50087.herokuapp.com/quiz")
//     .then(res =>console.log(res.data.data[0]))
//             .then(
//                 (result) => {
//                     console.log('result',result)
//                     setIsLoaded(true);
//                     setItems(result);
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <div>{items}</div>
//         );
//     }
// }

export default Home;