import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Meter from '../../components/Lotties/Meter/Meter';

const Result = ({ name, score }) => {

    const naviagte = useNavigate();

    useEffect(() => {
        if (!name) {
            naviagte('/')
        }
    }, [name, naviagte])


    return (
        <div className='flex flex-col items-center justify-center'>
            <Meter />
            <span className='text-2xl m-10 item-center flex flex-col justify-items-center'>Final Score: {score}</span>
            <Button
                variant='contained'
                color='secondary'
                size='large'
                style={{ alignSelf: 'center', marginTop: 20 }}
                href='/'
            >
                Homepage
            </Button>
        </div>
    )
}

export default Result