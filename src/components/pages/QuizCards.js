import React from "react";
import './cards.css'

function QuizCards(props) {
    const print = (e) => {
        console.log('e.target', e.target.value);
    }

    return (
        <>
            <div onClick={print} className="quiz-card">
                <div>{props.q}</div>
                <input type="radio" value={1} />{props.ans1}
                <input type="radio" value={2} />{props.ans2}
                <input type="radio" value={3} />{props.ans3}
                <input type="radio" value={4} />{props.ans4}
            </div>
        </>
    )
}


export default QuizCards;
