
import React from 'react'
import Image from 'next/image'
import img_health from "../img/dr.jpg"

export default function page() {
  return (
    <div className='health'>
      <div className="main sm:p-12 py-12 flex flex-row flex-wrap justify-between items-center gap-2 ">
        <div className="left capitalize mx-auto text-center sm:text-left">
          <div className='text-5xl drop-shadow-md '>
            <p className='drop-shadow-md '>your future depends</p>
            <p> on your health</p>
           </div>
          <p className='mt-2'>isn't it tine to work on your own body?</p>
          <a href="https://www.who.int/"target='blank' className=''><p className='py-2 mx-auto sm:ml-0
          w-24 text-center rounded mt-4 px-3 bg-cyan-400' >let's start</p></a>
        </div>
        <div className="right border-2 mx-auto ">
          <div className="img_health border-4 w-48">
          <Image alt='ok' src={img_health} className='w-full h-full'></Image>
          </div>
          <p className='uppercase text-center tracking-wider'>dr. nicola goodman</p>
        </div>
      </div>
    </div>
  )
}
