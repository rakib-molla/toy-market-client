import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToyDetails = () => {
    const notify = () => toast("Deleted Successfully");
    const toyDetails = useLoaderData();
    const { category, img, price, rating, ratingCount, userEmail, availableQuantity, stoke, sellerName, subCategory, toyName, detailDescription } = toyDetails || {};

    const navigate = useNavigate();
    // console.log(toyDetails);

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure to Delete Item')
        if (proceed) {
            fetch(`https://toy-marketplace-server-assignment-11.vercel.app/deleteMyToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        /* alert('deleted successfully'); */
                        // const remaining = toys.filter(toy => toy._id !== id);
                        // setToys(remaining);
                        navigate('/allToys');

                    }
                })
        }
    }
    return (
        <div>
            <ToastContainer />
            <h1 className='text-center font-bold text-xl'>Welcome To Toy Details Page </h1>
            <div className="card w-auto bg-gray-100 shadow-xl my-10">
                <figure><img className='h-96 w-96 rounded-lg mt-3' src={toyDetails?.img} alt="image" /></figure>
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl">Category: {toyDetails?.category}</h2>
                    <h2 className="font-bold text-xl"> SubCategory: {toyDetails?.subCategory}</h2>
                    <h2 className="font-bold text-2xl"> Name: {toyDetails?.toyName}</h2>
                    <p>Price: ${toyDetails?.price}</p>

                    <div className='inline-flex justify-center items-center'>
                    <span className=''>Ratings: {toyDetails?.rating} </span>
                    <Rating style={{ maxWidth: 100 }} value={toyDetails?.rating} readOnly/> 
                    </div>
                    
                    <p>Seller Name: {toyDetails?.sellerName}</p>
                    <p>Email: {toyDetails?.userEmail}</p>
                    <p>Available Quantity: {toyDetails?.availableQuantity}</p>
                    <p>Description: {toyDetails?.detailDescription}</p>

                    <div className="card-actions justify-center ">
                        <button onClick={() => handleDelete(toyDetails._id,)} className='bg-red-500 py-2 px-5 font-bold rounded-md text-white'><span onClick={notify}>Delete</span></button>
                    </div>
                    <div>
                    <Link className='btn btn-primary' to={`/update/${toyDetails?._id}`}>Edit Toy</Link>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;