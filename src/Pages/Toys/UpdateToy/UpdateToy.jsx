import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useParams } from 'react-router-dom';

const UpdateToy = () => {
    const {id} = useParams();

    const location = useLocation();
    
    console.log(location);
    
    const {user} = useContext(AuthContext);
    const notify = () => toast("😁 Toy Update");

    const [toy, setToy] = useState({})
    useEffect(()=>{
        fetch( `https://toy-marketplace-server-assignment-11.vercel.app/toyDetails/${id}`)
        .then(res=>res.json())
        .then((data)=>{
            setToy(data);
        })
    },[])

   

    const handleUpdateToy =(event)=>{
        
        event.preventDefault();

        
        const _id = event.target._id.value;
        const category = event.target.category.value;
        const subCategory = event.target.subCategory.value;
        const toyName = event.target.toyName.value;
        const photoUrl = event.target.photoUrl.value;
        const sellerName = event.target.sellerName.value;
        
        const userEmail = event.target.userEmail.value; 
        const price = event.target.price.value;
        const rating = event.target.rating.value;
        const availableQuantity = event.target.availableQuantity.value;
        const description = event.target.description.value;

        const data = {_id, category, subCategory, toyName, photoUrl, sellerName,userEmail, price, rating, availableQuantity, description   }
        // console.log(data);

        fetch(`https://toy-marketplace-server-assignment-11.vercel.app/update/${_id}`,{
            method: 'PUT',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.modifiedCount > 0){
                
            }
        })
        

    }

    return (
        <div className='my-20'>
            <h1 className='text-center font-bold capitalize text-3xl'>update Toy Details </h1>
            <div className="card ">
                <div className="card-body mx-32">
                    <form onSubmit={handleUpdateToy}>
                        
                        <div className="form-control hidden">
                            <label className="label">
                                <span className="label-text">id</span>
                            </label>
                            <input type="text" defaultValue={toy._id}   name='_id' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" defaultValue={toy.category}  placeholder="Category Name" name='category' className="input input-bordered" />

                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" defaultValue={toy.subCategory} placeholder="Category Name" name='subCategory' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" defaultValue={toy.toyName} placeholder="Toy Name" name='toyName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" defaultValue={toy.photoUrl}  placeholder="Photo URL" name='photoUrl' className="input input-bordered" />
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
                            <input type="number" defaultValue={toy.price} placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" defaultValue={toy.rating} placeholder="Rating" name='rating' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Available Quantity </span>
                            </label>
                            <input type="number" defaultValue={toy.availableQuantity} placeholder="Available Quantity" name='availableQuantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Description </span>
                            </label>
                            <textarea name="description" defaultValue={toy.description}  className='border' cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={notify}> Update Toy </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;