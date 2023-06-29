import React from 'react'
import Image from 'next/image'
import navbar from "../(nicola)/img/threedots.png"
import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
      <div className="navbar py-3
      flex justify-between justify-items-center ">
        <div className="part_one logo  sm:ml-12">
          <p className='uppercase text-cyan-400 tracking-wider text-4xl font-bold '>heisenberg</p>
        </div>
      <div className="part_two  sm:mr-12">
        <label className="buttons ">
         <div className="img h-10 w-10 sm:hidden mr-5 p-1 bg-cyan-400 rounded">
         <Image alt="threedots" src={navbar} className='h-full w-full'></Image>
         </div>
         <input type="checkbox" className='hidden' />
         <div className="links hidden sm:flex sm:flex-row gap-4 mt-1.2
         flex flex-col text-center
         ">
          <Link href="/Health"className='capitalize tracking-wider
           py-2 px-3 bg-cyan-400 rounded font-bold ls '>health</Link>
          <Link href="/Care"className='capitalize tracking-wider
           py-2 px-3 bg-cyan-400 rounded font-bold'>care</Link>
          <Link href="/Support"className='capitalize tracking-wider
           py-2 px-3 bg-cyan-400 rounded font-bold'>support</Link>
         </div>
      </label>
        </div>
      </div>
    </div>
  )
}
