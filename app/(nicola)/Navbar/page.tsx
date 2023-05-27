import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import threedots from"../img/threedots.png"
export default function page() {
  return (
<>
<div className="nav flex flex-row justify-between items-center px-8 flex-wrap  bg-gray-800 py-2">
    <div className="logo ">
     <h1 className='text-4xl font-bold tracking-wider text-cyan-400'>Heisenberg</h1>
    </div>

      <label > 
            <div className="parent_img h-10 w-10 hidden ">
            <Image alt='img' src={threedots} className='h-full w-full bg-cyan-400 rounded p-1 ' />
            </div>
            <input type="checkbox" className='hidden'/>

            <div className="links  w-96 flex flex-row justify-between items-center flex-wrap" >
            <Link href="/Mr_white"
            className=' py-2 px-3 bg-cyan-400 font-bold tracking-wider capitalize rounded-xl'>
              mr.white</Link>
            <Link href="/Mr_jesse"
            className=' py-2 px-3 bg-cyan-400 font-bold tracking-wider capitalize rounded-xl'>
              mr.jesse</Link>
            <Link href="/Mr_saul"
            className=' py-2 px-3 bg-cyan-400 font-bold tracking-wider capitalize rounded-xl'>
              mr.saul</Link>
        </div>
      </label>
</div>
</>  
    
  )
}
