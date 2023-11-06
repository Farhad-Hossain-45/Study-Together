/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AssignmentCard from '../assignmentCard/AssignmentCard';

const OurAssignment = () => {
    const [assignments,setAssignments] = useState([])
    useEffect(()=>{
        fetch('/assignment.json')
        .then(res => res.json())
        .then(data => {
            setAssignments(data)
        })
    },[])

    console.log(assignments)
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8'>Our Assignment</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                assignments.map( card => <AssignmentCard key={card._id} card = {card}></AssignmentCard>)
            }
            </div>
        </div>
    );
};

export default OurAssignment;