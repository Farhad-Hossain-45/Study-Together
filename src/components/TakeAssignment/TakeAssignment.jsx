/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const TakeAssignment = () => {
    const {user} = useContext(AuthContext)
    const assignment = useLoaderData()
    const { _id ,title, description, marks, type,image,date} = assignment || {}

    const handleTakeAssignment = e =>{
        e.preventDefault()
        const form = e.target;
        const pdfUrl = form.url.value
        const node = form.node.value;
        const email = user?.email;
        const name = user?.displayName;

        const newValue = {pdfUrl,node,email,name,image,marks,title}
        console.log(newValue)

        fetch('https://eleventh-assignment-server-smoky.vercel.app/takeAssignments',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newValue)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success !',
                    text: 'Assignment submitted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            {/* <h2>this is take assignment page: {title}</h2> */}

            <div className='bg-gray-400'>
                <form className='text-center mt-10' onSubmit={handleTakeAssignment}>
                <p className="text-lg font-semibold text-white">Pdf URL</p>
            <input className="pl-2 py-2 w-[300px] md:w-[400px]  text-lg "required type="url" name="url" placeholder="Pdf URL" id="" />
            <br />
            <p className="text-lg font-semibold text-white">Quick Note</p>
            
            <textarea name="node" className="pl-2  py-2 w-[300px] md:w-[400px] h-[100px]" id="" placeholder="Quick Note" required cols="30" rows="10"></textarea>
            <button className='btn btn-outline btn-primary block mx-auto mt-2'>Submitted Assignment</button>
            {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>

        </div>
    );
};

export default TakeAssignment;