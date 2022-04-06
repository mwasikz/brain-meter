import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';
import { useNavigate } from 'react-router-dom';



const Question = (
    {
        currQues,
        setCurrQues,
        questions,
        options,
        correct,
        score,
        setScore,
        setQuestions,
    }
) => {

    const navigate = useNavigate();

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select';
        }
        else if (selected === i && selected !== correct) {
            return 'wrong';
        }
        else if (i === correct) {
            return 'select';
        }
    }       

    const handleCheck = (i) => {
        setSelected(i);

        if(i === correct) setScore(score + 10);

        setError(false);
    }

    const handleNext = () => {
        if(currQues > 8) {
            navigate('/result')
        }
        else if(selected) {
            setCurrQues(currQues+1)
            setSelected()
        }
        else {
            setError("Please Select an option first")
        }
    }

    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
    }



    return (
        <div className='question m-3'>
            <h1 className='font-bold'>Question {currQues + 1}</h1>

            <div className='single-question'>
                <h2 dangerouslySetInnerHTML={{ __html: questions[currQues].question }} className='text-xl font-medium antialiased'></h2>

                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options &&
                        options.map(i => (
                            <button
                              
                                onClick={() => handleCheck(i)}
                                className={`single-option ${selected && handleSelect(i)} shadow-xl rounded-md bg-slate-200`}
                                key={i}
                                disabled={selected}
                            >
                            
                                
                            <span dangerouslySetInnerHTML={{__html: i}}></span> 
                            </button>
                        ))
                    }
                </div>
                    
                    <div className='controls'>

                        <Button
                           variant='contained'
                           color='secondary'
                           size='large'
                           style={{ width: 100, marginTop: 20 }}
                           href='/' 
                           onClick={handleQuit}
                        >
                            Quit
                        </Button>

                        <Button
                           variant='contained'
                           color='primary'
                           size='large'
                           style={ {width: 100, marginTop: 20 }}
                           onClick={handleNext}
                        >
                            Next
                        </Button>

                    </div>

            </div>
        </div>
    )
}

export default Question