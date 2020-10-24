import React, { useState } from "react";
import ApiOption from '../api/ApiOption'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ViewMyAns = (props) => {
    const userName = props.location.customNameData;
    console.log('userName', userName);
    const [value, setVale] = useState("");
    const [copied, setCopied] = useState(false);
    const sendTo =`/quiz/${userName}/newQuizFriend`
    // const getUser = () => {
    //     apiOption.getUser(userName)
    //         .then(response => {
    //             console.log('get user', response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    return (
        // ליצור טבלה ולהכניס לתוכה את תוצאות המשתמש + ליצור לינק למשתמש כדי לשלוח לחברים
        <div className='container-me'>
            <input value={value}
                onChange={({ target: { value } }) => {
                    setVale(value);
                    setCopied(false);
                }} />
            <br></br>

            <CopyToClipboard text={value}
                onCopy={() => setCopied(true)}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard>
            <br></br>
            {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
            {console.log("my Link", value)}

        </div>
    );
};
export default ViewMyAns;

// import React from 'react';
// const ViewMyAns = (props) => {
//     const userName = props.location.customNameData ;

//     return (
//         <div>{console.log(userName)}</div>
//     )
// }
// export default ViewMyAns;
