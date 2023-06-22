import React from 'react';
import image1 from '../../../public/image/slider1.png';
import image2 from '../../../public/image/slider2.png';
import image3 from '../../../public/image/slider3.jpg';
import image4 from '../../../public/image/slider4.jpg';

const Slider = () => {
    return (
        <div className='mt-20' data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="carousel w-full h-screen my-5 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        
                        <h1 className='text-white text-center text-5xl font-bold'>
                        A toy car, in its form, is called a Swamp <br /> rocking roll, it can be in the form of a toy car, but it all comes in different forms <br /> For children, they can ride on 
                        </h1>
                        
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h1 className='text-white text-center text-5xl font-bold'>
                        A toy car, in its form, is called a Swamp <br /> rocking roll, it can be in the form of a toy car, but it all comes in different forms <br /> For children, they can ride on 
                        </h1>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h1 className='text-white text-center text-5xl font-bold'>
                        A toy car, in its form, is called a Swamp <br /> rocking roll, it can be in the form of a toy car, but it all comes in different forms <br /> For children, they can ride on 
                        </h1>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <h1 className='h-4 text-center text-5xl font-bold'>
                        A toy car, in its form, is called a Swamp <br /> rocking roll, it can be in the form of a toy car, but it all comes in different forms <br /> For children, they can ride on 
                        </h1>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;