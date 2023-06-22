import React from 'react';

const About = () => {
    return (
        <>
            <div className='mx-auto mt-20' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <h1 className='font-bold text-center mb-5'>About Us</h1>
                <h1 className='font-bold text-5xl text-center mb-10'>we make your <span className='text-blue-400'>Client</span> happier <br /> with the best toys</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto w-full'>
                <div className="card w-72 bg-base-100 shadow-xl hover:bg-pink-400 hover:text-white">
                    <figure className="px-10 pt-10">
                        <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/srv1-copyright.png" alt="image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Big Selection</h2>
                        <p>The widest toy range.</p>
                        <div className="card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl hover:bg-fuchsia-400 hover:text-white">
                    <figure className="px-10 pt-10">
                        <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/srv2-copyright.png" alt="image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Online Store</h2>
                        <p>Easiest online shopping.</p>
                        <div className="card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl hover:bg-yellow-400 hover:text-white">
                    <figure className="px-10 pt-10">
                        <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/srv3-copyright.png" alt="image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Delivery</h2>
                        <p>Fast and easy delivery.</p>
                        <div className="card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl hover:bg-cyan-400 hover:text-white">
                    <figure className="px-10 pt-10">
                        <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/srv4-copyright.png" alt="image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Support</h2>
                        <p>Call our awesome team.</p>
                        <div className="card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;


