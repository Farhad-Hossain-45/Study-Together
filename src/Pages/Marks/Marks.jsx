/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const Marks = () => {
    const assignment = useLoaderData()
    console.log(assignment)
    const { _id ,title, marks, type, image, date,pdfUrl,node} = assignment || {}
        const {user} = useContext(AuthContext)
        const email = user.email

   const handleGiveMarks = e => {
    e.preventDefault();
    const form = e.target
    const url = form.url.value;
    const node = form.node.value;
    const marks = form.marks.value;
    const feedback = form.feedback.value;
    const value = {url,node,marks,feedback,email}
    console.log(value)

    fetch('https://eleventh-assignment-server-smoky.vercel.app/giveAssignment',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success !',
                text: 'Assignment marks submitted successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
   }

    return (
        <div>
            
            <div className='bg-gray-400'>
                <form className='text-center mt-10' onSubmit={handleGiveMarks}>
                <p className="text-lg font-semibold text-white">Pdf URL</p>
            <input className="pl-2 py-2 w-[300px] md:w-[400px] text-lg "required defaultValue={pdfUrl} type="url" name="url" readOnly placeholder="Pdf URL" id="" />
            <br />
            <p className="text-lg font-semibold text-white">Quick Note</p>
            
            <textarea name="node" className="pl-2  py-2 w-[300px] md:w-[400px] h-[100px]" id="" placeholder="Quick Note" defaultValue={node} readOnly required cols="30" rows="10"></textarea>
            <p className="text-lg font-semibold text-white">Give Marks</p>
            <input className="pl-2 py-2 w-[300px] md:w-[400px] text-lg "required type="number" name="marks" placeholder="Give Marks" id="" /> <br />
            <p className="text-lg font-semibold text-white">Feedback</p>
            
            <textarea name="feedback" className="pl-2  py-2 w-[300px] md:w-[400px] h-[100px]" id="" placeholder="Feedback" required cols="30" rows="10"></textarea> <br />
            <button className='btn btn-outline btn-primary block mx-auto mt-2'>Submit</button>

            
                </form>
            </div>
        </div>
    );
};

export default Marks;