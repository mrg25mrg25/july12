import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import threedots from "../img/threedots.png"
export default function page() {
  return (
    
      <div className="nav_phone flex items-center justify-between border-4 h-14">
        <div className=".... logo">
         <h1 className='text-4xl font-bold tracking-wider text-cyan-400'>Heisenberg</h1>
        </div>

         <label className='.... border flex flex-row-reverse justify-between items-center'>
         <div className="---- parent_img h-10 w-10 mr-2 ">
         <Image src={threedots} alt='picther' className='h-full w-full'></Image>
         </div>
         <input type="checkbox" className="---- hidden" />
         <div className="---- nav_links capitalize font-bold tracking-wider py-20
         bg-gray-800 rounded-xl ">
          <Link href="./Mr_white"className='my-6' >
            <span className='bg-cyan-400 py-2 px-2 rounded-lg'>Mr.white</span>
          </Link>
          <Link href="./Mr_jesse"className='my-6' >
          <span className='bg-cyan-400 py-2 px-2 rounded-lg'>Mr.Jesse</span>
          </Link>
          <Link href="./Mr_saul"className='my-6' >
          <span className='bg-cyan-400 py-2 px-3.5 rounded-lg'>Mr.saul</span>
          </Link>
        </div>
        </label>
      </div>
    
  )
}
