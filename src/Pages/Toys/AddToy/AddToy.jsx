import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { tabTitle } from '../../../Title/Title';

const AddToy = () => {
    tabTitle ('Toy Store | AddToy');
    const notify = () => toast("😁 Toy Added");
    const {user} = useContext(AuthContext);
    
    useEffect(()=>{
        fetch('https://toy-marketplace-server-assignment-11.vercel.app/allToy')
        .then(res=> res.json())
        .then((data)=>{
            console.log(data);
        })
    },[])

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const subCategory = form.subCategory.value;
        const toyName = form.toyName.value;
        const photoUrl = form.photoUrl.value;
        const sellerName = form.sellerName.value;
        const userEmail = form.userEmail.value; 
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;
        
        

        const data = { category, subCategory, toyName, photoUrl, sellerName, userEmail, price, rating, availableQuantity, description};
        console.log(data);

        fetch('https://toy-marketplace-server-assignment-11.vercel.app/postToy',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res)=> res.json())
        .then((result)=>{
            console.log(result);
            event.target.reset();
        })
    }
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Welcome To Add Section </h1>
            <div className="card ">
                <div className="card-body mx-32">
                    <form onSubmit={handleAddToy}>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" placeholder="Category Name" name='category' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" placeholder="Category Name" name='subCategory' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  placeholder="Photo URL" name='photoUrl' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="Seller Name" name='sellerName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} placeholder="Seller Email" name='userEmail' className="input input-bordered" />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" name='rating' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Available Quantity </span>
                            </label>
                            <input type="number" placeholder="Available Quantity" name='availableQuantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Description </span>
                            </label>
                            <textarea name="description"  className='border' cols="30" rows="10"> Type Here </textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={notify}> Add Toy </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddToy;
