import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom'

import ApiOption from '../../api/ApiOption'
import QuizCards from "./QuizCards"
import Routes from '../../router/Routes'

const UserAnswer = (props) => {
    let history = useHistory();
    const [items, setItems] = useState([]);
    const [showButton, setShowButton] = useState(true);
    const [userName, setUserName] = useState('');
    const [userAnswer, setUserAnswer] = useState({});

    useEffect(() => {
        setUserName(props.location.customNameData);          //get from props the user name
        ApiOption.getAllQuiz()                                  //make request get all quiz
            .then(response => {
                console.log('get all quiz');
                initializeArrays(response.data.data)
            })
            .catch(e => {
                console.log(e);
            });
    }, [])

    const initializeArrays = (data) => {
        const infoQuiz = [];
        for (let i in data) {
            const obj = {
                'question': data[i].question,
                'answer1': data[i].answer1,
                'answer2': data[i].answer2,
                'answer3': data[i].answer3,
                'answer4': data[i].answer4,
            };
            infoQuiz.push(obj);
        }
        setItems(infoQuiz);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        ApiOption.updateUser(userName, userAnswer)                  //make request to update user answer
            .then(response => {
                console.log('update user answer');
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });

        history.push({
            pathname: `${Routes.viewMyAnswers}`,
            customNameData: userName,
        });
    }

    const handleOptionChange = (event) => {
        const questionNumber = event.target.id;
        const answerNumber = event.target.value;
        const prevUserAnswer = userAnswer;
        setUserAnswer({ ...prevUserAnswer, [`q${questionNumber}`]: answerNumber });
        console.log(userAnswer);
        console.log(event.target);
    }

    return (
        <div className='container-me'>
            {console.log('items - render', items)}
            <div>
                <h1>{`${userName}`} Quiz</h1>
                <p> select the correct answer for each of your questions:</p>
            </div>
            <form onSubmit={onSubmit}>
                {items && items.map((item, index) => (
                    <QuizCards userName={userName} key={index} id={index} q={item.question}
                        ans1={item.answer1} ans2={item.answer2} ans3={item.answer3} ans4={item.answer4} onChange={handleOptionChange}
                    />
                ))}
                {showButton &&
                    <button type="submit" onSubmit={onSubmit}>Save and share!</button>
                }
            </form>
        </div>
    )
}
export default UserAnswer
