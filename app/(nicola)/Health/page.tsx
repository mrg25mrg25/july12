import React from 'react'
import Image from 'next/image'
import crystal from "../img/crystal.jpg"
export default function page() {
  return (
 <div className="health  grid grid-cols-1 md:grid-cols-2 p-5 gap-4
  ">
   <div className="left   text-6xl font-bold capitalize
   my-auto">
         <p className=''>find the perfect</p>
         <p>health care</p>
         <p className='text-sm'>Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity</p>
     </div>
     <div className="right">
      <div className="drug">
      <div className="img w-5/6 h-full px-5  rounded mx-auto">
        <Image alt='crystal' className='crystal rounded' src={crystal}></Image>
      </div>
      <div className="text p-5 mx-auto  w-5/6">
        <p className='text-4xl font-black capitalize'>crystal meth</p>
        <p>Crystal meth, or methamphetamine, is a stimulant drug that carries a high risk for physical dependence.</p>
      </div>
      </div>
     </div>
 </div>

  )
}
