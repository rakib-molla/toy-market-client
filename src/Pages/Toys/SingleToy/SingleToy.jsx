import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToy = ({toy}) => {
    const {_id, img, toyName, price, rating} = toy || {};
    

    return (
        <div>
            <div className="card w-auto bg-gray-100 shadow-xl">
                <figure><img className='h-28 w-28' src={img} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: ${price}</p>
                    <div className='inline-flex  items-center'>
                    <span >Ratings: {rating} </span>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly/> 
                    </div>
                    <div className="card-actions justify-end">
                        
                        <Link className='px-3 py-2 bg-blue-400 rounded-md text-white' to={`toyDetails/${_id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;