import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Questions = () => {
    const quizQuestion = useLoaderData();
    const [count, setCount] = useState(0);
    const [submit, setSubmit] = useState(false);
    const handleSubmit =(event)=>{
        event.preventDefault();
        setSubmit(true);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
               {
                    submit ? ((<div className='mt-32 ml-auto mr-auto text-center bg-white p-7 rounded-md w-1/3'>
                        <p className='text-1xl font-semibold'>Quiz Mark: {count}</p>
                    </div>)) : ''
               }
            {
                quizQuestion.data.questions.map(quiz => <Quiz submit = {submit} count = {count} setCount={setCount} key={quiz.id} quiz={quiz}/>)
            }
            <div className='text-center'>
                <input className='p-4 rounded-md bg-purple-500 mt-5 mb-4 text-white' type="submit" value="Submit" />
            </div>
        </form>
        </>
        
    );
};

export default Questions;