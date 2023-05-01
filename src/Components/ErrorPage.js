import React from 'react';

const ErrorPage = () => {
    return (
        <div className='mt-52 text-center'>
           <div>
                <h2 className='text-3xl font-semibold'>Oops!</h2>
                <p>Something unexpected occured</p>
                <p className='text-gray-400 italic'>Not found 404</p>
           </div>
        </div>
    );
};

export default ErrorPage;