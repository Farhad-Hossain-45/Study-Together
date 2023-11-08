/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Marks = () => {
    const assignment = useLoaderData()
    console.log(assignment)
    const { _id ,title, marks, type, image, date} = assignment || {}

   

    return (
        <div>
            <h2>this is marks page:{_id}</h2>
        </div>
    );
};

export default Marks;