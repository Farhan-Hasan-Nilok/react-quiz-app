import React, { useState } from 'react';

const Options = ({option, handleCheck, name}) => {
    // console.log(option)
    return (
        <div className='flex justify-items-center items-center '>
            <input className='mr-5' type="radio" value={option} name={name}  onChange={handleCheck} />
            {option}
        </div>
    );
};

export default Options;