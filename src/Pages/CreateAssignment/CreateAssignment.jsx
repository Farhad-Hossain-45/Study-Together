/* eslint-disable no-unused-vars */
import { stringify } from 'postcss';
import React from 'react';
import Swal from 'sweetalert2';

const CreateAssignment = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const type = form.type.value;
        const image = form.image.value;
        const date = form.date.value;

        const newAssignment = {title,description,marks,type,image,date};
        console.log(newAssignment)

        fetch('https://eleventh-assignment-server-smoky.vercel.app/assignments',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success !',
                    text: 'Assignment added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div >
            
        
        
        <div className="bg-gray-500 w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
        <form onSubmit={handleOnSubmit}>
            <p className="text-lg font-semibold text-white">Title</p>
            <input className="pl-2 py-2 w-[300px] md:w-[400px]  text-lg "required type="text" name="title" placeholder="Assignment Title" id="" />
            <br />
            <p className="text-lg font-semibold text-white">Description</p>
            {/* <input  className="pl-2  py-2 w-[300px] md:w-[400px]" required type="text" name="description" placeholder="Description" /> */}
            <textarea name="description" className="pl-2  py-2 w-[300px] md:w-[400px] h-[100px]" id="" placeholder="Description" required cols="30" rows="10"></textarea>
            <br />
            <p className="text-lg font-semibold text-white">Marks</p>
            <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="number" name="marks" placeholder="Assignment Marks"/>
            <br />
            <br />
            <label className="text-lg font-semibold text-white"  htmlFor="type"> Assignment Difficulty: </label>
            <select className="text-lg font-medium " name="type" id="">

                <option className="text-lg font-medium" value="easy">Easy</option>
                <option className="text-lg font-medium " value="medium">Medium</option>
                <option className="text-lg font-medium" value="hard">Hard</option>
               
            </select>
            <br />
            <br />

            <p className="text-lg font-semibold text-white">Image URL</p>
            <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="url" name="image" placeholder="Image URL" id="" />
            <br />
            <p className="text-lg font-semibold text-white">Due Date</p>
              <input className="pl-2  py-2 w-[300px] md:w-[400px]"required type="date" name="date" placeholder="Due Date" id="" />
              <br />
               
               <button    className="btn w-[300px] mt-4 md:w-[400px]
                  hover:text-black
                 text-lg font-semibold">ADD ASSIGNMENT</button>

        </form>
    </div>
    </div>
    );
};

export default CreateAssignment;