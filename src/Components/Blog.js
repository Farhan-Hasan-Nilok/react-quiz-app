import React from 'react';

const Blog = () => {
    return (
        <div className='mt-28'>
            <div className='mr-auto ml-auto bg-white p-7 rounded-md text-center w-6/12 mb-10'>
                <p className='text-2xl font-semibold mb-10'>Question: What is the purpose of React Router ?</p>
                <p><span className='font-semibold'>Answer:</span> React Router allows to visit different routes or path of an site. Based on the router user can see different things</p>
            </div>
            <div className='mr-auto ml-auto bg-white p-7 rounded-md text-center w-6/12 mb-10'>
                <p className='text-2xl font-semibold mb-10'>Question: How does Context API works ?</p>
                <p><span className='font-semibold'>Answer:</span> Context API help to pass data avoiding props drill. The data sent from parent component can be accessed from any child component without sending to its corresponding child component.</p>
            </div>
            <div className='mr-auto ml-auto bg-white p-7 rounded-md text-center w-6/12 mb-10'>
                <p className='text-2xl font-semibold mb-10'>Question: What is useRef ?</p>
                <p><span className='font-semibold'>Answer:</span> useRef is a built in React hook which value is not needed for rendering in the dom it accepts an initial value but can be change.</p>
            </div>
        </div>
    );
};

export default Blog;