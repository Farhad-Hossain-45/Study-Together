/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/study_logo-removebg-preview (1).png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link>
            <div className=''>
                <div className='flex items-center gap-1'>
                <div><img src={logo} alt=""  className=' w-16 h-14'/></div>
                
                <div><p className='text-green-900 font-medium'>Study Together</p></div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Logo;