import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    return (
        <div className='mt-32 '>
            <p className='font-semibold text-2xl text-center mb-10'>This is Statistic</p>
            
                <BarChart
                className='mr-auto ml-auto'
                    width={500}
                    height={300}
                    data={quizData.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
    );
};

export default Statistics;