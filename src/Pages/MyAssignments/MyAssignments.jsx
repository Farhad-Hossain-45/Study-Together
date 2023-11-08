/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const MyAssignments = () => {
    const {user} = useContext(AuthContext)
    const currentUser = user.email

    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5001/takeAssignment')
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
            <h2>this is my assignments page</h2>
            
                    {
                    filterData.map(assignment => <p key={assignment._id}>{assignment.title}</p>)
                    }
                
            
        </div>
    );
};

export default MyAssignments;