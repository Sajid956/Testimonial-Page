import React, { useState } from 'react'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft} from 'react-icons/md'
import { Card } from './Card'

export const CardContainer = ({reviews}) => {
    
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightHandler() {
        setIndex((index + 1) % reviews.length);
    }

    function surpriseHandler() {
        let idx = Math.floor(Math.random()*reviews.length);
        setIndex(idx);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-700 flex flex-col justify-center items-center p-10'>

        <Card reviews={reviews[index]}></Card>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400  font-bold '>

            <button className='cursor-pointer hover:text-violet-500' onClick={leftHandler}>
                <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            <button className='cursor-pointer hover:text-violet-500' onClick={rightHandler}>
                <MdOutlineKeyboardDoubleArrowRight />
            </button>

        </div>

        <button className='mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={surpriseHandler}>Surprise Me</button>

    </div>
  )
}
