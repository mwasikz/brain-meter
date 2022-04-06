import './Home.css';
import Hero from '../../components/Lotties/Hero/Hero';
import HeroMobile from '../../components/Lotties/Hero/HeroMobile';
import { Button, MenuItem, TextField } from '@material-ui/core';
import Categories from '../../Data/Categories'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {

        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }

        else {
            setError(false)
            fetchQuestions(category, difficulty);
            navigate('/quiz');
        }

    }


    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className='settings-select'>
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <TextField
                        style={{
                            marginBottom: 25
                        }}
                        label='Enter Your Name'
                        color="secondary"
                        onChange={(e) => setName(e.target.value)}

                    />


                    <TextField
                        select
                        style={{
                            marginBottom: 25
                        }}
                        label='Select Category'
                        color="secondary"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >

                        {
                            Categories.map((cat) => (

                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                    <TextField
                        select
                        style={{
                            marginBottom: 25
                        }}
                        label="Select Difficulty"
                        color="secondary"
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>

                    </TextField>

                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'

                        onClick={handleSubmit}

                    >
                        Start Quiz
                    </Button>


                </div>

            </div>

            <div className=''>
                <HeroMobile />
            </div>
        </div>
    )
}

export default Home