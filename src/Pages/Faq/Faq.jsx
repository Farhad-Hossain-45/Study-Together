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
               
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='text-center shadow-xl bg-gray-400 rounded-xl'>
                        <p className='text-2xl font-semibold'>Q: How to Submit an assignment?</p>
                        <p>Ans: By providing a pdf file, name and quick note</p>
                    </div>
                    <div className='text-center shadow-xl bg-gray-400 rounded-xl'>
                        <p className='text-2xl font-semibold'>Q: How to check your assignment marks?</p>
                        <p>Ans: Go to your my assignment route on navbar and you can find your marks there.</p>
                    </div>
                    <div className='text-center shadow-xl bg-gray-400 rounded-xl'>
                        <p className='text-2xl font-semibold'>Q: How to create an assignment?</p>
                        <p>Ans: By go to create assignment page on navbar and you can create your assignment by fill up the form.</p>
                    </div>
                    <div className='text-center shadow-xl bg-gray-400 rounded-xl'>
                        <p className='text-2xl font-semibold'>Q: How to update an assignment?</p>
                        <p>Ans: Anyone can update an assignment from update assignment page.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Faq;