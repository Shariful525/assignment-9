import React from 'react';
import './Statistics.css';
import { Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: 'React',
            quiz: 8
        },
        {
            name: 'JavaScript',
            quiz: 9
        },
        {
            name: 'CSS',
            quiz: 7
        },
        {
            name: 'Git',
            quiz: 9
        }
    ];
    return (
        <div className='statistics-container'>
            <div className='chart-container'>
                <LineChart width={700} height={500} data={data}>
                    <Line type="monotoneX" dataKey="quiz" stroke='#438481' />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                </LineChart>

            </div>
        </div>
    );
};

export default Statistics;
