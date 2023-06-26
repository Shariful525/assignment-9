import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './LanguageDetails.css';

const LanguageDetail = () => {
    const language = useLoaderData();

    const { data } = language;
    // console.log(data);
    const { questions } = data;



    return (
        <div className='quiz-container'>
            <h2>Quiz Of {data.name} </h2>
            {
                questions.map(question => <Quiz
                    question={question}
                ></Quiz>)
            }

        </div>
    );
};

export default LanguageDetail;