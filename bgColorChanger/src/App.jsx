import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('teal')


  return (
    <>
      <div className='w-full duration-200 h-screen flex justify-center' style={{backgroundColor:color}}>
       <div className='fixed flex flex-wrap bottom-15 justify-center'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setColor("red")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>setColor("green")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>setColor("blue")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button onClick={()=>setColor("olive")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"olive"}}>
            Olive
          </button>
          <button onClick={()=>setColor("gray")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"gray"}}>
            Gray
          </button>
          <button onClick={()=>setColor("yellow")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-black shadow-lg 'style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>setColor("pink")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-black shadow-lg 'style={{backgroundColor:"pink"}}>
            Pink
          </button>
          <button onClick={()=>setColor("purple")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"purple"}}>
            Purple
          </button>
          <button onClick={()=>setColor("lavender")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-black shadow-lg 'style={{backgroundColor:"lavender"}}>
            Lavender
          </button>
          <button onClick={()=>setColor("white")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-black shadow-lg 'style={{backgroundColor:"white"}}>
            White
          </button>
          <button onClick={()=>setColor("black")} className=' justify-center outline-none px-3 py-2 rounded-2xl text-white shadow-lg 'style={{backgroundColor:"black"}}>
            Black
          </button>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
