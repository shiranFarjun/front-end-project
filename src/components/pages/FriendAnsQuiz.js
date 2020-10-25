
import React, { useEffect, useState, useParams } from "react";
import { useHistory } from 'react-router-dom'
import ApiOption from '../../api/ApiOption'
import QuizCards from "./QuizCards"
// import Routes from '../../router/Routes'

function FriendAnsQuiz(props) {
    // const { username,name } = useParams();

    const history = useHistory();
    const [items, setItems] = useState([]);
    const [showButton, setShowButton] = useState(true);
    const [Name, setName] = useState([]);
    const [friendAnswer, setFriendAnswer] = useState({});

    useEffect(() => {
        setName(props.location.customNameData);          //get from props the user name
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
        console.log('answer of friend');
        ApiOption.updateFriend(Name.username, Name.name, friendAnswer)                  //make request to update user answer
            .then(response => {
                console.log('update user answer');
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });

        history.push({
            pathname: `/quiz/${Name.username}/viewFriendsAns/${Name.name}`,
            customNameData: Name.name,
        });
    }

    const handleOptionChange = (event) => {
        const questionNumber = event.target.id;
        const answerNumber = event.target.value;
        const prevUserAnswer = friendAnswer;
        setFriendAnswer({ ...prevUserAnswer, [`q${questionNumber}`]: answerNumber });
        console.log(friendAnswer);
        console.log(event.target);
    }

    return (
        <div className='container-me'>
            {console.log( 'FriendAnsQuiz' ,Name.username,Name.name)}
            <div>
                <h1>friend {`${Name.name}`} Quiz</h1>
                <p> select the correct answer for each of your questions:</p>
            </div>
            <form onSubmit={onSubmit}>
                {items && items.map((item, index) => (
                    <QuizCards userName={Name.name} key={index} id={index} q={item.question}
                        ans1={item.answer1} ans2={item.answer2} ans3={item.answer3} ans4={item.answer4} onChange={handleOptionChange}
                    />
                ))}
                {showButton &&
                    <button type="submit" onSubmit={onSubmit}>Save and share!</button>
                }
            </form>
        </div>
    );
};

export default FriendAnsQuiz;


