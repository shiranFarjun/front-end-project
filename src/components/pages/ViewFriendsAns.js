import React, { useEffect, useParams } from "react";
import ApiOption from '../../api/ApiOption'

const ViewFriendsAns = (props) => {
    const { username, name } = useParams();
    const friendName = props.location.customNameData;
    // const baseURL = window.location.origin;
    // const sendTo = `${baseURL}/quiz/${username}/newQuizFriend`;
    // const sendTo = `${baseURL}/quiz/liraz/newQuizFriend`;


    useEffect(() => {
        ApiOption.getScore(username, friendName)             // return example 3/5    
            .then(response => {
                console.log('get user with his answer', response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [])



    return (
        // ליצור טבלה ולהכניס לתוכה את תוצאות המשתמש + ליצור לינק למשתמש כדי לשלוח לחברים

        <div className='container-me'>
            Score
            {console.log('username', username)}
            {console.log('name', name)}

        </div>
    );
};
export default ViewFriendsAns;



