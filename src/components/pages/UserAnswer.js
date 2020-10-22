import React, { useEffect, useState } from "react";
import apiOption from '../../api/apiOption'
import QuizCards from "./QuizCards"

const UserAnswer = (props) => {
    const [items, setItems] = useState([]);
    const userName = props.location.param1;
    console.log('props name user', userName)  // get the user name for create link

    useEffect(() => {
        apiOption.getAllQuiz()
            .then(response => {
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

    return (
        <div className='container-me'>
            {console.log('items', items)}
            <div>
                <h1>{`${userName}`} Quiz</h1>
                <p> select the correct answer for each of your questions:</p>
            </div>
            {items && items.map((item, index) => (
                    <QuizCards   key={index} q={item.question}
                        ans1={item.answer1} ans2={item.answer2} ans3={item.answer3} ans4={item.answer4}
                    />
            ))}
        </div>
    )
}
export default UserAnswer
