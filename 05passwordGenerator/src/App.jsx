import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength]=useState(8);
  const [numbersAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  const passwordGenerator=useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*(){}~`";

    for(let i=1;i<=length;i++){
      let charIdx=Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(charIdx);
    }
    setPassword(pass);

  }, [length,numbersAllowed,charAllowed,setPassword])


  return (
    <>
    <div className='text-orange-400 px-4 py-4 w-full max-w-md mx-auto shadow-md rounded-2xl text-2xl bg-gray-700 my-10 '>
      <h1 className='text-center my-3'>Password Generator</h1>
    <div className='flex rounded-2xl overflow-hidden mb-4 justify-center '>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 border-2 border-white rounded-2xl mr-2 \'
      placeholder='Pass'
      readOnly
      />
      <button className='bg-blue-300 rounded-2xl outline-none text-white px-3 py-2 shrink-0'>Copy</button>
    </div>
    <div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input className='cursor-pointer'
         type="range"
         min={6}
         max={60}
         value={length}
         />
         <label htmlFor="">Length : {length}</label>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
