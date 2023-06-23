import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import threedots from "../img/threedots.png"
export default function page() {
  return (
    <div className="nav grid grid-cols-1 md:grid-cols-2 ">
      <div className="logo p-5  w-64  ">
        <p className='capitalize w-48 font-black text-4xl tracking-wider text-cyan-400 hover:text-cyan-300 '>epatoliya</p>
      </div>
     <div className="pages ">
      <label className='' >
        <div className=" head_icon  relative">
        <div className="icon  w-12 cursor-pointer md:hidden  
        absolute right-1 bottom-4 bg-cyan-400 p-1 rounded">  
          <Image alt='pic' src={threedots}>
          </Image>
        </div>
        </div>
        <input type="checkbox" className='hidden'/>
      
        <div className="links md:flex flex-col md:flex-row gap-16 justify-center pt-5 pb-5 ">
        <Link href="/Health" className='bg-cyan-400 py-2 px-3 capitalize font-bold tracking-wider rounded hover:bg-cyan-600 w-20 mx-auto 'id=''>Health</Link>
        <Link href="/Care" className='bg-cyan-400 py-2 px-3 capitalize font-bold tracking-wider rounded hover:bg-cyan-600 w-20 text-center mx-auto'>Care</Link>
        <Link href="/Support" className='bg-cyan-400 py-2 px-3 capitalize font-bold tracking-wider rounded hover:bg-cyan-600 w-24 mx-auto'>Support</Link>
        </div>
      </label>
     </div>
    </div>
  )
}
