import React from 'react'

export default function page() {
  return (
    <div className=' -2 -rose-400 bg-blue-200  '>
 <form
  action="https://formspree.io/f/mdornolw"
  method="POST"
  className='-2 -blue-400 flex flex-col py-20'
>
  <label className='-2  text-center py-4'>
    <p className='capitalize tracking-wider font-bold'> Your email:</p>
    <input type="email" name="email"/>
  </label>
  <label className=' -yellow-400 text-center py-4'>
    <p className='capitalize tracking-wider font-bold'>Your message:</p>
    <textarea name="message"></textarea>
  </label>
  
 <div className="send text-center py-4">
 <button type="submit" className='rounded tracking-wider py-2 px-4 capitalize font-bold bg-green-200'>Send</button>
 </div>
</form>
    </div>
  )
}
