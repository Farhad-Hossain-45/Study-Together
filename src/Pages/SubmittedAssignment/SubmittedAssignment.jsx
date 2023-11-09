/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import TableRow from './TableRow/TableRow';
import Swal from 'sweetalert2';

const SubmittedAssignment = () => {
    const [takeAssignment,setTakeAssignment] = useState([])
    // const [filterAssignment,setFilterAssignment] = useState([])
    const {user} = useContext(AuthContext)
    // const currentEmail = user.email
  
    const url = (`https://eleventh-assignment-server-smoky.vercel.app/takeAssignment?email=${user.email}`)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTakeAssignment(data)
        })
    },[url])
    // useEffect(()=>{
    //   fetch('https://eleventh-assignment-server-smoky.vercel.app/takeAssignment')
    //   .then(res=>res.json())
    //   .then(data=> {
    //     setTakeAssignment(data)
    //   })
    // },[])
    // useEffect(()=>{
    //   const filterData = takeAssignment.filter(item => item.email == currentEmail)
    //    setFilterAssignment(filterData)
    // },[currentEmail, takeAssignment])

    const handelDeleteBtn= (id)=>{
        // console.log(id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            
            fetch(`https://eleventh-assignment-server-smoky.vercel.app/takeAssignment/${id}`,{
              method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                Swal.fire(
              'Deleted!',
              'Your cart has been deleted.',
              'success'
            )
              const remaining = takeAssignment.filter(assignment => assignment._id !== id)
              setTakeAssignment(remaining)
              }
            })
          }
        })
      } 
    console.log(takeAssignment)
    const handleCompleted = id => {
      fetch(`https://eleventh-assignment-server-smoky.vercel.app/takeAssignment/${id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'completed'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount> 0){
          const remaining = takeAssignment.filter(assignment => assignment._id !== id)
          const updated = takeAssignment.find(assignment => assignment._id === id)
          updated.status = 'completed'
          const newAssignment = [updated,...remaining]
          setTakeAssignment(newAssignment) 
        }
      })
    }
    return (
        <div>
            
            {/* {
        filterAssignment.map(assignment=> <TableRow key={assignment._id} assignment={assignment} handelDeleteBtn={handelDeleteBtn} handleCompleted={handleCompleted}></TableRow>)
      } */}
      {
        takeAssignment.map(assignment=> <TableRow key={assignment._id} assignment={assignment} handelDeleteBtn={handelDeleteBtn} handleCompleted={handleCompleted}></TableRow>)
      }
      
      
    

        </div>
    );
};

export default SubmittedAssignment;