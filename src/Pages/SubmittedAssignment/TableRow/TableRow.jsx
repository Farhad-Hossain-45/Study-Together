/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const TableRow = ({assignment,handelDeleteBtn,handleCompleted}) => {
    const { _id ,title, marks,name,status } = assignment || {}
    
    return (
        <div className='mt-3'>
            <div className='grid grid-cols-4 shadow-xl bg-gray-400'>
                <div>
                    <h1>Assignment Title</h1>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                </div>
                <div>
                    <h2>Examinee Name</h2>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                </div>
                <div>
                    <h2>Assignment Marks</h2>
                    <h2 className='text-xl font-semibold'>{marks}</h2>
                </div>
                <div>
                <Link to={`/giveMarks/${_id}`}><button className='btn btn-outline btn-secondary mr-2'>give mark</button></Link>
                    <button onClick={()=>handelDeleteBtn(_id)} className='btn btn-outline btn-error'>X</button>
                    {
                        status === 'completed' ? <button className='btn btn-outline btn-primary'> Completed</button> :
                        <button onClick={()=>handleCompleted(_id)} className='btn btn-outline btn-secondary'>Pending</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default TableRow;