import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const languages = useLoaderData();
    const datas = languages.data;
    console.log(datas);

    return (
        <div>
            <h2>Total Programming Languages: {datas.length}</h2>

            <div className='card-container'>
                {
                    datas.map(data => <Card
                        key={data.id}
                        language={data}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;