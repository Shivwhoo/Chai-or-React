import React from 'react'
import { useEffect,useState } from 'react'

function Github() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Shivwhoo')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
  },[])  
  return (
    <div className='text-center bg-gray-700 my-4 text-white text-3xl'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
