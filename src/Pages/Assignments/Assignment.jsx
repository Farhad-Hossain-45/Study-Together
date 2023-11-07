/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Assignment = ({assignment}) => {
    const { _id ,title, description, marks, type,image,date} = assignment || {}
    return (
        <div>
              <div className="card bg-base-100 shadow-xl mt-8 h-[400px] w-[350px]">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl font-medium'>Marks : {marks}</p>
    <p className='text-xl font-medium'>Assignment difficulty : {type}</p>

    <div className="card-actions">
      <div className='flex justify-between mt-2 gap-5'>
        <div>
          <Link to= {`/assignments/${_id}`}>
              <button className='btn btn-outline btn-primary'>View Assignment</button>
          </Link>
        </div>
        <div>
          <Link to={`/updateAssignments/${_id}`}>
            <button className='btn btn-outline btn-secondary'> Update Assignment</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Assignment;