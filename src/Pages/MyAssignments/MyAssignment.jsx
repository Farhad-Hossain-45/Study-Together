/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const MyAssignment = ({assignment}) => {
    const { _id ,title, description, marks, type,image,date,pdfUrl,node,} = assignment || {}
    const [assignments,setAssignments] = useState([])
    useEffect(()=>{
        fetch('https://eleventh-assignment-server-smoky.vercel.app/giveAssignment')
        .then(res => res.json())
        .then(data => {
            setAssignments(data)
        })
    },[])
        // console.log(assignments)
    // const data = useLoaderData()
    // const {feedback} = data
    
        
    return (
        <div>
            {
                assignments.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                  <iframe src={pdfUrl}></iframe>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{title}</h2>
                  <p>Marks: {marks}/{item.marks}</p>
                  <p>Feedback: {item.feedback}</p>
                  <div className="card-actions">
                    
                  </div>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default MyAssignment;