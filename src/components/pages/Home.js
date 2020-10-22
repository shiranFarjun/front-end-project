import React, { useState } from "react";
import apiOption from '../../api/apiOption'
import Routes from './../../router/Routes'
import { Link } from 'react-router-dom'

function Home() {
    const [name, setName] = useState('');
    const newTo = {
        pathname: `${Routes.userAnswer}`,
        param1: name
    };

    const onSubmit = data => {
        data.preventDefault();
        createUser();
    };

    const createUser = () => {
        apiOption.create(name)
            .then(response => {
                console.log('create user', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="container-homePage">
            <h1>Best Friend Quiz</h1>
            <p>How well do your friends know you?</p>
            <ol>
                <li>Create your own quiz</li>
                <li>Share it with your friends</li>
                <li>See their results & discover your real best friends</li>
            </ol>
            <form className="form-container" onClick={onSubmit}>
                <label>What's your name?</label>
                <input className="firstName" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <Link to={newTo} >
                    <button >Get Started</button>
                </Link>
            </form>
        </div>
    );
};

















export default Home;