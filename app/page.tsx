import React from 'react'
import Navbar from './(nicola)/Navbar'
import Health from "./(nicola)/Health/page"
import Care from "./(nicola)/Care/page"
import Support from "./(nicola)/Support/page"
export default function page() {
  return (
    <div>
      <Navbar/>
      <Health/>
      <Care/>
      <Support/>
    </div>
  )
}


