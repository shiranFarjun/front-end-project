import React, { useState, useEffect } from "react";
import ApiOption from '../../api/ApiOption'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ViewMyAns = (props) => {
    const username = props.location.customNameData;
    console.log('userName', username);
    // const [value, setVale] = useState("");
    const [copied, setCopied] = useState(false);
    const baseURL = window.location.origin;
    const sendTo = `${baseURL}/quiz/${username}/newQuizFriend`;


    useEffect(() => {
        ApiOption.getUser(username)
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
            <div>
                <h2>Your Quiz is ready!</h2>
                <h5>Share your Quiz link with all your friends and see their results.</h5>
            </div>
            <input value={sendTo}
                onChange={(e)=>console.log(e)}
            />
            <br></br>

            <CopyToClipboard text={sendTo}
                onCopy={() => setCopied(true)}>
                <button>Copy Link</button>
            </CopyToClipboard>
            <br></br>
            {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
            {console.log("my Link", sendTo)}

        </div>
    );
};
export default ViewMyAns;



