import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyUpdate = () => {
    const singleToys = useLoaderData();
    console.log(singleToys);
    return (
        <div>
            <h1>{singleToys.length}</h1>
        </div>
    );
};

export default ToyUpdate;