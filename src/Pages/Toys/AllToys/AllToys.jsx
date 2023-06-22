import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToys = () => {
    const notify = () => toast("Deleted Successfully");
    // const toys = useLoaderData();

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://toy-marketplace-server-assignment-11.vercel.app/allToy')
            .then(res => res.json())
            .then((data) => {
                setToys(data);
            })
    }, [])

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-assignment-11.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then((data) => {
                setToys(data)

            })
    }

    const handleDelete=(id)=>{
        const proceed = confirm('Are you sure to Delete Item')
        if(proceed){
            fetch(`https://toy-marketplace-server-assignment-11.vercel.app/deleteMyToys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then((data)=>{
                // console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
        }
    }

    return (
        <div className='mb-20 mt-32'>
            <div className='text-center my-10'>
                <input onChange={(event) => setSearchText(event.target.value)} className='border p-2' type="text" />
                <button className='btn btn-primary' onClick={handleSearch}>Search</button>
            </div>

            <ToastContainer />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th> Price</th>
                            <th>Available Quantity</th>
                            <th>Show Details</th>
                            <th>Edit</th>
                            <th> Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {toys.slice(0, 20).map((toy, index) => (
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <th>{toy?.sellerName}</th>
                                <td> {toy?.toyName}</td>
                                <td>${toy?.price} </td>
                                <td>{toy?.availableQuantity} pice</td>
                                <td> <Link className='btn btn-primary' to={`/toyDetails/${toy?._id}`}>View Details</Link> </td>

                                <td> <Link className='btn btn-primary' to={`/update/${toy?._id}`}>Edit Toy</Link> </td>
                                <td><button className='bg-red-500 py-3 px-5 text-white font-bold rounded-md' onClick={()=>handleDelete(toy._id)}><span onClick={notify}>Delete</span></button></td>
                            </tr>
                        ))}


                    </tbody>
                    
                </table>
            </div>


        </div>
    );
};

export default AllToys;