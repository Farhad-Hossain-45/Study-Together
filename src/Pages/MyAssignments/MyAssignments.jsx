/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import MyAssignment from './MyAssignment';

const MyAssignments = () => {
    const {user} = useContext(AuthContext)
    const currentUser = user.email

    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    

    useEffect(()=>{
        fetch('https://eleventh-assignment-server-smoky.vercel.app/takeAssignment')
        .then(res => res.json())
        .then(data => {
            setData(data)
            // setLoading(false)

        })
        
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.email === currentUser)
        setFilterData(filterDataNew)
    },[data, currentUser])
    
   console.log(filterData)
    console.log(data)
    
    return (
        <div>
            
            
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                    filterData.map(assignment => <MyAssignment key={assignment._id} assignment ={assignment}></MyAssignment>)
                    }
                    </div>
                
            
        </div>
    );
};

export default MyAssignments;