import React, { useState } from 'react'
import Card from './comnponents/card'
const App = () => {
  return (
    <>
    <h1 className='bg-red-400 text-black p-4 m-5 rounded-2xl' >Tailwind css</h1>
    <Card username={"ChaiOrCode"} price="95"/>  
    <Card username={"Shivwhoo"} price="95"/>  
    </>
  )
}

export default App
