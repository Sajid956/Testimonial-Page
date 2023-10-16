import React from 'react'
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri';

export const Card = (props) => {
    const reviews = props.reviews;

  return (
    <div className='flex flex-col md:relative'>

        <div className='relative mx-auto md:absolute md:top-[-7rem] z-10'>
            <img src={reviews.image} alt='' className='aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 '/>

            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-1] left-[10px]'></div>

        </div>

        <div className='text-center'>

            <h2 className='font-bold text-3xl md:text-3xl tracking-wider capitalize'>{reviews.name}</h2>

            <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>

        </div>

        <RiDoubleQuotesL className='text-violet-400 w-fit mx-auto mt-5'/>

        <p className='text-center text-slate-500 mt-4 '>{reviews.text}</p>

        <RiDoubleQuotesR  className='text-violet-400 w-fit mx-auto mt-5 mb-5'/>

    </div>
  )
}
