import React from 'react'
import Image from 'next/image'
import gaja from "../img/gaja (1).jpg"
import dr from "../img/dr.jpg"
import Link from 'next/link'
import gaja2 from "../img/gaja (2).jpg"
export default function page() {
  return (
   <div className="care pb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="left  p-5">
      <div className="img relative -2">
        <Image alt='gaja' src={gaja} className='rounded w-2/3 '></Image>
        <div className="dr absolute top-14 right-10 -2 w-2/5">
        <Image alt='gaja' src={dr} className='rounded  '></Image>
        </div>
      </div>
      <p className='capitalize pt-12'>
        hey my name is alex fiesta. im the meth cook and the doctor, im the one to guide you and to protect your health condition
      </p>
      <div className="button  py-6 w-5/6 ">
      <Link href="https://www.collectivevoice.org.uk/blog/five-benefits-of-drug-and-alcohol-treatment/" className='capitalize px-3 py-3 rounded bg-green-400 tracking-widest
      font-bold' target='blank'>treatment</Link>
      </div>
    </div>
    <div className="right ">
      <div className="drug w-5/6  mx-auto">
        <Image alt='gaja2' src={gaja2}></Image>
        <p className='capitalize text-3xl font-black tracking-wider'>medicine or poison?</p>
        <p>it depends on your using</p>
        <p>sometimes its a blessing but most of the time people use it in wrong way. we only recommand doctors to use it</p>
      </div>
      <div className="button  py-6 w-5/6 mx-auto">
      <Link href="https://www.fda.gov/drugs/information-consumers-and-patients-drugs/think-it-through-managing-benefits-and-risks-medicines" className='capitalize px-3 py-3 rounded bg-cyan-400 tracking-widest
      font-bold' target='blank'>benefits</Link>
      </div>

    </div>
   </div>
  )
}
