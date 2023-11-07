/* eslint-disable no-unused-vars */

import { Link, useLoaderData } from 'react-router-dom';


const AssignmentDetails = () => {
   const data = useLoaderData()
   const { _id, title,description,marks,type,image,date} = data || {}
    
    return (
        <div className='mt-10'>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl w-full h-[300px] " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className='text-xl font-semibold'>Marks: {marks}</p>
    <p className='text-xl font-semibold'>Assignment Difficulty: {type}</p>
    <p className='text-xl font-semibold'>Due Date: {date}</p>
    <div className="card-actions">
      <Link to={`/takeAssignment/${_id}`}>
          <button className="btn outline-primary btn-outline">Take Assignment</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentDetails;