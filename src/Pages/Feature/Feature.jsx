/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../assets/c++_image.avif'
import image2 from '../../assets/html_image.jpg'
import image3 from '../../assets/java_image.avif'
import image4 from '../../assets/javascript_image.avif'
import image5 from '../../assets/php_image.avif'
import image6 from '../../assets/python_image.avif'

const Feature = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-4xl font-bold text-center '>Our Feature Section</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6'>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Beginner Opportunities</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Helping Hand</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Digital Lav Facility</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">24 Hour Active</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Best Team Combination</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        <div className="card bg-base-100 shadow-xl h-[250px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image6} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Best Trainer</h2>
    
    <div className="card-actions">
      
    </div>
  </div>
</div>
        </div>
            
        </div>
    );
};

export default Feature;