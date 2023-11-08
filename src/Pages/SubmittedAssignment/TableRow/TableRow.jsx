/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


const TableRow = ({assignment,handelDeleteBtn}) => {
    const { _id ,title, marks,name } = assignment || {}
    
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
                    <button className='btn btn-outline btn-secondary mr-2'>give mark</button>
                    <button onClick={()=>handelDeleteBtn(_id)} className='btn btn-outline btn-error'>X</button>

                </div>
            </div>
        </div>
    );
};

export default TableRow;