/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import Assignment from './Assignment';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    // const [filterDifficulty,setFilterDifficulty] = useState('')
    const {loading} = useContext(AuthContext)
   useEffect(()=>{
    fetch('https://eleventh-assignment-server-smoky.vercel.app/assignments')
    .then(res => res.json())
    .then(data =>{
        setAssignments(data)
        console.log(data)
    })
   },[])
   console.log(assignments)
//    const filterAssignments = () => {
//     if (filterDifficulty) {
//       const filteredAssignments = assignments.filter((assignment) => assignment.difficulty === filterDifficulty);
//       setAssignments(filteredAssignments);
//     }
//   };

  const handleEasy = ()=>{
    const filterEasy = assignments.filter(item => item.type == 'easy')
    setAssignments(filterEasy)
  }
  const handleMedium =()=>{
    const filterMedium = assignments.filter(item => item.type == 'medium')
    setAssignments(filterMedium)
  }
  const handleHard = ()=>{
    const filterHard = assignments.filter(item => item.type == 'hard')
    setAssignments(filterHard)
  }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-8'>Our Assignment</h2>
            {/* <select className='btn mt-4 btn-secondary'
        value={filterDifficulty}
        onChange={(e) => setFilterDifficulty(e.target.value)}
      >
        <option value="">All</option>
        <option value="easy" onClick={handleEasy}>Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className='btn btn-outline ml-4' onClick={filterAssignments}>Filter</button> */}

      <div className='flex gap-5'>
        
        <div>
            <button onClick={handleEasy} className='btn'>Easy</button>
        </div>
        <div>
            <button className='btn' onClick={handleMedium}>Medium</button>
        </div>
        <div>
            <button className='btn' onClick={handleHard}>Hard</button>
        </div>
      </div>
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