import React, { useState } from "react";
import ApiOption from '../../api/ApiOption'
import Routes from './../../router/Routes'
import { Link, useHistory } from 'react-router-dom'

function Home() {
    let history = useHistory();
    const [name, setName] = useState('');

    const onSubmit = data => {
        data.preventDefault();
        createUser();
        history.push({
            pathname: `${Routes.userAnswer}`,
            customNameData: name,
        });
    };

    const createUser = () => {
        ApiOption.create(name)
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
            <form className="form-container" onSubmit={onSubmit}>
                <label>What's your name?</label>
                <input className="firstName" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Get Started</button>
            </form>
        </div>
    );
};

















export default Home;