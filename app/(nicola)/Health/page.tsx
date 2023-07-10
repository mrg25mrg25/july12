import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
  <div className="health ">
    <div className="main py-20">
      <div className="text capitalize text-center font-bold tracking-wider
       w-5/6  sm:w-full mx-auto">
        <p className=' text-3xl sm:text-5xl'>your life depends on</p>
        <p className='text-4xl'>your health</p>
        <p className='text-xl'>is't it time to focus on your own health?</p>
      </div>
      <div className="description">
         <p className='w-5/6 sm:w-3/5 mx-auto text-center
          text-xl'>What do you mean by human health?
          Human health, defined as the complete state of physical, social, and mental well-being and not merely the absence of illness, disease, or infirmity, is as vital a resource as water, food, or energy.
        </p>
        
        <Link href="/"><p className='py-2 px-3 bg-cyan-400 rounded capitalize tracking-wider w-28 mx-auto text-center mt-3 text-lg'>start now</p></Link>
        
      </div>
     </div>
  </div>
  )
}
