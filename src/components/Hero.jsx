import React from 'react'
import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing and Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-lg'>Get Started</button>
            </div>
            <div>
                <img src={bgImg} alt='/' />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><i class="bi bi-cloud-arrow-up-fill h-6 text-indigo-600"></i> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><i class="bi bi-database-fill-check h-6 text-indigo-600"></i> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><i class="bi bi-hdd-rack-fill h-6 text-indigo-600"></i> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><i class="bi bi-send-plus-fill h-6 text-indigo-600"></i> API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero