import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
    const[book,setBook] = useState([])
    useEffect(() => {
        const getBook  = async() => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
    <>
        <div className='max-w-screen-xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='mt-28 items-center justify-center text-center '>
                <h1 className='text-2xl font-semibold md:text-4xl'>We're Delighted to have you 
                    <span className='text-pink-500'> Here ! :)</span></h1>
                <p className='mt-12'>
                Discover a world of learning opportunities with our diverse range of courses. 
                From technology and business to arts and personal development, we offer something for everyone. 
                Our courses are crafted by industry experts and tailored to meet your learning needs. 
                Don’t wait – browse our course catalog and enroll today to start your educational journey!
                </p>
                <Link to="/">
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700 mt-6'>
                        Back
                    </button>
                </Link>   
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4  '>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>

        </div>
    </> 
  )
}

export default Course