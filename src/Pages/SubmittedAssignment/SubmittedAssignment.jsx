/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import TableRow from './TableRow/TableRow';
import Swal from 'sweetalert2';

const SubmittedAssignment = () => {
    const [takeAssignment,setTakeAssignment] = useState([])
    const {user} = useContext(AuthContext)
    const url = (`http://localhost:5001/takeAssignment?email=${user.email}`)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setTakeAssignment(data)
        })
    },[url])

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
            
            fetch(`http://localhost:5001/takeAssignment/${id}`,{
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
    return (
        <div>
            
      {
        takeAssignment.map(assignment=> <TableRow key={assignment._id} assignment={assignment} handelDeleteBtn={handelDeleteBtn}></TableRow>)
      }
      
      
    

        </div>
    );
};

export default SubmittedAssignment;