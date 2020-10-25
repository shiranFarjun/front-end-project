import React, { useState } from "react";
import ApiOption from '../api/ApiOption'
import Routes from '../router/Routes'
import { useHistory, useParams } from 'react-router-dom'

function NewFriend() {
    const baseURL = window.location.origin;
    let history = useHistory();
    const [name, setName] = useState('');
    const { username } = useParams();

    const onSubmit = data => {
        data.preventDefault();
        createFriend();
        history.push({
            pathname: `${Routes.friendAnswer} `,    //  
            customNameData:[username, name]
        });
    };

    const createFriend = () => {
        ApiOption.createFriend(username, name)
            .then(response => {
                console.log('create Friend', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="container-homePage">
            <h2>Prove how well you know {username}</h2>
            <form className="form-container" onSubmit={onSubmit}>
                <label>What's your name?</label>
                <input className="firstName" value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Get Started</button>
            </form>
        </div>
    );
};

export default NewFriend;


