/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


const Faq = () => {
    const [faq,setFaq] = useState()
    useEffect(()=>{
        fetch('/faq.json')
        .then(res=>res.json())
        .then(data=>{
            setFaq(data)
        })
    },[])
    console.log(faq)
    return (
        <div className='mt-10'>
            <div >
                <h2 className='text-center text-4xl font-bold'>FAQ</h2>
               
               <div>
                    <div>
                        <p>How to Submit an assignment?</p>
                    </div>
                    <div>
                        <p>How to check your assignment marks?</p>
                    </div>
                    <div>
                        <p>How to create an assignment?</p>
                    </div>
                    <div>
                        <p>How to update an assignment?</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Faq;