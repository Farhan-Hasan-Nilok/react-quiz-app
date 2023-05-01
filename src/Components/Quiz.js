import React, { useEffect, useState } from 'react';
import Options from './Options';

const Quiz = ({quiz, setCount, count, submit}) => {
    console.log(submit)
    const [correctAnsClick, setCorrectAnsClick] = useState(false);
    const [selectedAns, setSelectedAns] = useState('');
    const handleCheck = (event) => {
        // console.log(quiz)
        setSelectedAns(event.target.value)
        console.log(correctAnsClick)
    }

    useEffect(() =>{
        if(correctAnsClick){
            if (selectedAns !== quiz.correctAnswer){
                setCount(count-1);
                setCorrectAnsClick(false)
            }
        } else{
            if(selectedAns === quiz.correctAnswer){
                setCount(count+1);
                setCorrectAnsClick(true);
            }
        }
    },[selectedAns])
    
    return (
        <div className='mt-24 w-9/12 ml-auto mr-auto'>
           <div className='bg-white rounded-xl p-20 text-2xl font-semibold text-center'>
                {quiz.question.replace('<p>', '').replace('</p>', '')} 
                <div className='grid md:grid-cols-2 mt-10 gap-10'>
                    {quiz.options.map(option => <div key={option} className={
                        `${submit&&((quiz.correctAnswer === option) ?
                             (selectedAns === quiz.correctAnswer ? 
                                'bg-green-500 p-3 rounded-md' :
                                 'bg-green-500 p-3 rounded-md') :
                                  (selectedAns === option ? 'bg-red-500 p-3 rounded-md' : 'p-3 rounded-md'))}`
                        }><Options option={option} name={quiz.id} handleCheck={handleCheck} /></div>)}
                </div>  
           </div>
        </div>
    );
};

export default Quiz;


/* option = correctAns ? 
      selectAns = correctAns ?
         Ans -> right(green) : eday correct ami vul disi
    :
    selectAns = option && (red)  
*/