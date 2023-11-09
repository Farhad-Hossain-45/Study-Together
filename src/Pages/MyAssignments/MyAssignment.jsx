/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const MyAssignment = ({assignment}) => {
    const { _id ,title, description, marks, type,image,date} = assignment || {}
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default MyAssignment;