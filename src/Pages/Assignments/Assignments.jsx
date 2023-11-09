/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import Assignment from './Assignment';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    const [filterDifficulty,setFilterDifficulty] = useState('')
    const {loading} = useContext(AuthContext)
   useEffect(()=>{
    fetch('http://localhost:5001/assignments')
    .then(res => res.json())
    .then(data =>{
        setAssignments(data)
    })
   },[])
   console.log(assignments)
   const filterAssignments = () => {
    if (filterDifficulty) {
      const filteredAssignments = assignments.filter((assignment) => assignment.difficulty === filterDifficulty);
      setAssignments(filteredAssignments);
    }
  };
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8'>Our Assignment</h2>
            <select className='btn mt-4 btn-secondary'
        value={filterDifficulty}
        onChange={(e) => setFilterDifficulty(e.target.value)}
      >
        <option value="">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className='btn btn-outline ml-4' onClick={filterAssignments}>Filter</button>
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