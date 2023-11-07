/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/error_image_crop.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='w-[450px] h-[400px] flex justify-center mt-10 items-center mx-auto'>
            <img src={image} alt="" />
            </div>
            <div className='text-center'>
                <Link to='/'>
                        <button className='btn btn-outline btn-secondary'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;