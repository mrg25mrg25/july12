import React from 'react'
import Image from 'next/image'
import kid from "../img/kid.jpg"
import drug from "../img/d (2).jpg"
import drug2 from "../img/d (1).jpg"
import Link from 'next/link'
export default function page() {
  return (
       
<div className="support_section  relative  border-4">
    
<div className="support2 section grid grid-cols-1 md:grid-cols-2 w-full 
     absolute top-0 left-0 py-8 md:py-20 gap-2 ">
        <div className="left">
          <div className="thekid">
            <div className="img  ">
              <Image alt='img' src={kid} className='h-80 mx-auto rounded w-64'></Image>
            </div>
            <div className="contribute text-center grid gap-2 ">
            <p className='uppercase font-bold'>protect your kid </p>
            <Link href="./Health" className='py-2 px-3 bg-rose-400
             w-1/4  rounded mx-auto text-white font-bold capitalize'>contribute</Link>
            </div>
          </div>
        </div>

        <div className="right grid gap-4 ">
          <div className="top   md:flex md:flex-row ">
            <div className="drug_img h-36 w-1/2 rounded 
            mx-auto">
              <Image alt='img' src={drug} className='h-full w-full rounded'></Image>
            </div>
            <div className="drug_text  md:text-left text-center  my-auto">
              <p className=' w-5/6 mx-auto'>A drug is any chemical substance that causes a change in an organism's physiology or psychology when consumed. </p>
            </div>
          </div>
          
          <div className="bottom  md:flex md:flex-row">
          <div className="drug_img h-36 w-1/2 rounded 
            mx-auto">
              <Image alt='img' src={drug2} className='h-full w-full rounded'></Image>
            </div>
            <div className="drug_text  md:text-left text-center  my-auto">
              <p className=' w-5/6 mx-auto'>Drugs take away control of your body & mind from YOU. Medicines reverse this and restore the control back to YOU </p>
            </div>
          </div>
          <p className='text-center'>The word Drug, taken from French word Drogue which means Dry Herb, strongly suggests that earliest drugs were taken out from plant sources. Earliest people used to treat diseases by some unconventional methods, using plants, animal products and minerals, of them plants were given priority.</p>
        <div className="moreinfo mt-5 mx-auto md:ml-0">
        <Link className='capitalize font-bold py-2  rounded text-white  px-3 bg-rose-400 ' href="/Contact">contact</Link>
        </div>
        </div>

      </div>
 {/* //again  */}
      <div className="support section grid grid-cols-1 md:grid-cols-2 w-full 
     absolute top-0 left-0 py-8 md:py-20 gap-2 ">
        <div className="left">
          <div className="thekid">
            <div className="img  ">
              <Image alt='img' src={kid} className='h-80 mx-auto rounded w-64'></Image>
            </div>
            <div className="contribute text-center grid gap-2 ">
            <p className='uppercase font-bold'>protect your kid </p>
            <Link href="./Health" className='py-2 px-3 bg-rose-400
             w-1/4  rounded mx-auto text-white font-bold capitalize'>contribute</Link>
            </div>
          </div>
        </div>

        <div className="right grid gap-4 ">
          <div className="top   md:flex md:flex-row ">
            <div className="drug_img h-36 w-1/2 rounded 
            mx-auto">
              <Image alt='img' src={drug} className='h-full w-full rounded'></Image>
            </div>
            <div className="drug_text  md:text-left text-center  my-auto">
              <p className=' w-5/6 mx-auto'>A drug is any chemical substance that causes a change in an organism's physiology or psychology when consumed. </p>
            </div>
          </div>
          
          <div className="bottom  md:flex md:flex-row">
          <div className="drug_img h-36 w-1/2 rounded 
            mx-auto">
              <Image alt='img' src={drug2} className='h-full w-full rounded'></Image>
            </div>
            <div className="drug_text  md:text-left text-center  my-auto">
              <p className=' w-5/6 mx-auto'>Drugs take away control of your body & mind from YOU. Medicines reverse this and restore the control back to YOU </p>
            </div>
          </div>
          <p className='text-center'>The word Drug, taken from French word Drogue which means Dry Herb, strongly suggests that earliest drugs were taken out from plant sources. Earliest people used to treat diseases by some unconventional methods, using plants, animal products and minerals, of them plants were given priority.</p>
        <div className="moreinfo mt-5 mx-auto md:ml-0">
        <Link className='capitalize font-bold py-2  rounded text-white  px-3 bg-rose-400 ' href="/Contact">contact</Link>
        </div>
        </div>

      </div>
</div>
  )
}
