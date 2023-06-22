import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tabTitle } from '../../../Title/Title';
import { Link } from 'react-router-dom';

const MyToy = () => {
    tabTitle ('Toy Store | MyToy');
    const notify = () => toast("Deleted Successfully");
    const {user} = useContext(AuthContext);
    const [searchText, setSearchText] = useState('')
    const [toys, setToys] = useState([])

    // console.log(user.email);

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-assignment-11.vercel.app/myToys/${user?.email}`)
        .then(res=> res.json())
        .then((data)=>{
            setToys(data);
        })
    },[user])

    // console.log(toys);

    const handleSearch=()=>{
        fetch(`https://toy-marketplace-server-assignment-11.vercel.app/toySearchByName/${searchText}`)
        .then(res=> res.json())
        .then((data)=>{
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

    const handleEdit = (id) =>{
        console.log(id);
    }

    return (
        <div className='my-20'>
            <ToastContainer />
            <div className='text-center mb-5'>
                <input onChange={(event)=> setSearchText(event.target.value)} className='border p-2' type="text" />
                <button className='btn btn-primary' onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Toy Name</th>
                            <th> Price</th>
                            <th>Available Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td> {toy.toyName}</td>
                                <td>${toy.price} </td>
                                <td>{toy.availableQuantity} pice</td>
                                <td> <Link to={`/update/${toy._id}`} className='btn'>Edit</Link> </td>
                                <td><button className='bg-red-500 py-3 px-5 text-white font-bold rounded-md' onClick={()=>handleDelete(toy._id)}><span onClick={notify}>Delete</span></button></td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default MyToy;