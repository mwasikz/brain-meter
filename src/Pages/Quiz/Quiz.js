import './Quiz.css';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Question from '../../components/Question/Question';

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {


        setOptions(questions && handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
        ]))


    }, [questions, currQues]);



    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5)
    }

    return (
        <div className='quiz flex flex-col items-center'>
            <span className='subtitle shadow-lg mt-6 pt-2 pb-2 pl-5 pr-5 text-lg'>Welcome, {name}</span>
            {
                questions ? (
                    <>

                        <div className='w-full flex justify-between pl-5 pr-5 pt-5 uppercase font-medium antialiased'>
                            <span>Score: {score}</span>
                        </div>

                        <Question
                            currQues={currQues}
                            setCurrQues={setCurrQues}
                            questions={questions}
                            options={options}
                            correct={questions[currQues]?.correct_answer}
                            score={score}
                            setScore={setScore}
                            setQuestions={setQuestions}

                        />

                    </>
                ) : (
                    <CircularProgress
                        style={{ margin: 100 }}
                        color='inherit'
                        size={80}
                        thickness={1}

                    />
                )
            }
        </div>
    )
}

export default Quiz