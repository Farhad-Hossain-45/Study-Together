/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const AssignmentCard = ({card}) => {
     const { _id ,title, description, marks, type,image,date} = card || {}
    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl mt-8 h-[400px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentCard;