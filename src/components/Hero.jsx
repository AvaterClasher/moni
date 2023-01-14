import React from 'react'
import {
    HiOutlineCloudUpload,
    HiDatabase,
    HiPaperAirplane,
    HiServer,
} from "react-icons/hi";

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero