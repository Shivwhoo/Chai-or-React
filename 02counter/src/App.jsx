import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(7);

  // let counter =5;
  const addvalue= function (){
    counter=counter+1
    if(counter >=21 ) counter=0;
    setCounter(counter)
  }
  const removeValue=()=>{
    if(counter<0) counter=0
    if(counter>0) counter=counter-1
    setCounter(counter);
  }
  return (

    <>
     <h1>CHAI OR REACT</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick={addvalue}>Add value : {counter}</button>
     <br />
     <button
     onClick={removeValue}> Remove value : {counter}</button>
    </>
  )
}

export default App
