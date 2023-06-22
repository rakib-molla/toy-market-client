import React from 'react';
import img from '../../../public/image/organize.png' ;
import { Link } from 'react-router-dom';
import './Organize.css';

const Organize = () => {
    return (
        <div>
            <div className='flex px-10' data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className='w-1/2 animate-shake'>
                <img className='h-auto w-auto rounded-lg' src={img} alt="" />
                </div>
                <div className='text-left p-10 mt-16' >
                    <h4 className='font-bold text-2xl'>WHAT WE DO</h4>
                    <h1 className='font-bold text-5xl my-3'>We help <span className='text-blue-500'>Organize</span> events for You</h1>
                    <p className='text-gray-400 mb-5'>Fun, educational activities for every occasion with premium toys and snacks. Learn more about our services!</p>
                    <Link className='mt-3 py-3 px-6 bg-black text-white rounded-2xl hover:bg-white hover:text-black hover:border'>Discover Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Organize;