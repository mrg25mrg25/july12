import React from 'react'
import Health  from "./(nicola)/Health/page"
import Care from "./(nicola)/Care/page"
import Support from "./(nicola)/Support/page"
import Nav from "./(nicola)/Nav/page"
import Contact from "./(nicola)/Contact/page"

export default function page() {
  return (
    <div>

      <Nav/>
      <Health/>
      <Care/>
      <Support/>
      <Contact/>
      
    </div>
  )
}

