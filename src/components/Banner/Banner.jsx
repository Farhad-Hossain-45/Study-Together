/* eslint-disable no-unused-vars */
import React from 'react';
import banner_image from '../../assets/section_image1.avif'

const Banner = () => {
    return (
        <div className='mt-10 bg-[#1E1160] '>
            <div className=" flex justify-around items-center md:flex-row flex-col md:h-[450px] md:gap-0 gap-y-10">
                
                <div data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className="text-white font-bold text-2xl">Study Together</h1>
                
                <p className="text-3xl font-medium text-white">What Makes Us
                    <span className='text-[#F18A20]'> Different?</span> <br /> </p>
                    {/* <p className='text-white mt-2 text-xl'>There are many companies out there providing IT <br />services, but not all are created equal. Some view your <br /> business as a line on a revenue sheet. With Fox Tech <br /> Unlimited, you’re more than just a client, you’re a<br /> partner, and we’ll do whatever it takes to help your <br /> business prosper.</p> */}

                    <button className='btn btn-outline btn-primary mt-3 text-white'>Explore More</button>
                
                
                </div>
                <div>
                <img src={banner_image}className=" h-[250px] w-[400px] lg:h-[350px] lg:w-[450px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;