import React from 'react';

const Gallery = () => {
    
    return (
        <div className='mt-10'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 bg-green-400 p-5'>
                <div className='mt-10'>

                    <div className='lg:absolute'>
                        <img className='rounded-lg' src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=" alt="" />
                       
                        
                    </div>
                </div>
                <div className='flex lg:flex-auto'>
                    <div className='lg:flex-auto'>
                        <img className='p-2 rounded-lg' src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=" alt="" />

                        <img className='p-2 rounded-lg' src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=" alt="" />
                    </div>

                    <div>
                        <img className='p-2 rounded-lg' src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=" alt="" />

                        <img className='p-2 rounded-lg' src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;