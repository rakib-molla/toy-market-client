import React, { useEffect, useState } from 'react';
import './ToyCard.css';
import SingleToy from '../SingleToy/SingleToy';

const ToyCard = () => {

    const [toys, setToys] = useState([]);

    const [activeTab, setActiveTab] = useState("-");

    const handleTabClick =(tabName)=>{
        setActiveTab(tabName)
    }

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-assignment-11.vercel.app/allToy/${activeTab}`)
        .then(res => res.json())
        .then((result)=>{
            setToys(result);
        })
    },[activeTab])

    return (
        <div className='my-10'>
            <div>
                <h1 className=" text-center mt-5 p-5 font-bold text-2xl text-blue-400">Filter By <span className='text-red-500'>{activeTab}</span></h1>
                <div className=" text-center">
                    <div className="text-center w-100 mx-auto ">
                        <div className="flex justify-center items-center">
                            <div
                                onClick={() => handleTabClick("sportsCar")}
                                className={`tab sportsCar ${activeTab == "sportsCar" ? "h-10 p-3 cursor-pointer bg-red-500 text-white" : ""
                                    }`}
                            >
                                Sports Car
                            </div>
                            
                            <div
                                onClick={() => handleTabClick("truck")}
                                className={`tab  truck ${activeTab == "truck" ? "h-10 p-3 cursor-pointer bg-red-500 text-white" : ""
                                    }`}
                            >
                                Truck
                            </div>
                            <div
                                onClick={() => handleTabClick("regularCar")}
                                className={`tab  regularCar ${activeTab == "regularCar" ? "h-10 p-3 cursor-pointer bg-red-500 text-white" : ""
                                    }`}
                            >
                                Regular Car
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 mt-10 mx-10">
                    {toys.map(toy => (
                        <SingleToy toy={toy} key={toy._id}></SingleToy>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToyCard;


{/* <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                 <span> map  and return fragment</span>  
                <div className="card w-auto bg-gray-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
</div> */}