import React, { useState } from "react";
import './cards.css'

function QuizCards(props) {
    // console.log(' QuizCards - props.userName', props.userName);
    const [selectedOption, setSelectedOption] = useState('')
    

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        props.onChange(event)
    }
    return (
        <div className="container-cards">
            <div className="quiz-card">
                <div>{props.q}</div>
                <div className="radio">
                    <input name={`quiz${props.id}`} id={props.id} type="radio" value="1"
                        checked={selectedOption === '1'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="1">
                        {props.ans1}
                    </label>
                </div>
                <div className="radio">
                    <input name={`quiz${props.id}`} id={props.id} type="radio" value="2"
                        checked={selectedOption === '2'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="2">
                        {props.ans2}
                    </label>
                </div>
                <div className="radio">
                    <input name={`quiz${props.id}`} id={props.id} type="radio" value="3"
                        checked={selectedOption === '3'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="3">
                        {props.ans3}
                    </label>
                </div>
                <div className="radio">
                    <input name={`quiz${props.id}`} id={props.id} type="radio" value="4"
                        checked={selectedOption === '4'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="4">
                        {props.ans4}
                    </label>
                </div>
            </div>

        </div>

    );
};


export default QuizCards;
