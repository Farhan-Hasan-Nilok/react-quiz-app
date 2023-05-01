import React from 'react';
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
const QuizTopic = ({topic}) => {
    return (
        <div className='bg-slate-600 rounded-xl p-3 mt-32 hover:bg-slate-800'>
                <img className='w-44 mt-0 mb-0 ml-auto mr-auto rounded-lg' src={topic.logo} alt="" />
           <div className='flex justify-center'>
             <Link to={`/questions/${topic.id}`}className='font-semibold text-white bg-teal-700 flex items-center p-3 rounded-lg mt-3'>
                {topic.name} Quiz <HiArrowRight className='text-white ml-3' />
            </Link>
           </div>
        </div>
    );
};

export default QuizTopic;