import React from "react";
import { useForm } from "react-hook-form";


function Home() {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" ref={register} />
            <input name="lastName" ref={register} />
            <input type="submit" />
        </form>
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
        axios.get("https://fathomless-meadow-50087.herokuapp.com/quiz")
            .then(res =>console.log(res.data.data[0]))
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