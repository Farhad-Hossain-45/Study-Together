/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import Assignment from './Assignment';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    const {loading} = useContext(AuthContext)
   useEffect(()=>{
    fetch('http://localhost:5001/assignments')
    .then(res => res.json())
    .then(data =>{
        setAssignments(data)
    })
   },[])
   console.log(assignments)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8'>Our Assignment</h2>

            {
                loading ? <span className="loading loading-spinner loading-lg"></span> :
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                assignments.map( assignment => <Assignment key={assignment._id} assignment={assignment}></Assignment>)
            }
            </div>
            }
            
        </div>
    );
};

export default Assignments;