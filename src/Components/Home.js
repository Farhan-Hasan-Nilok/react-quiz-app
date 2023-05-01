import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from './QuizTopic';

const Home = () => {
    const quizTopic = useLoaderData();
    return (
        <div className='m-20 grid md:grid-cols-4 gap-7'>
            {
                quizTopic.data.map(topic => <QuizTopic key={topic.id} topic={topic}/>)
            }
        </div>
    );
};

export default Home;