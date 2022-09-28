import React, { useEffect, useState } from 'react';
import Clock from "react-clock"
import 'react-clock/dist/Clock.css'

export default function App()
{
  const[time,setTime]= useState(new Date());

  useEffect(() =>{
    setInterval(() => {
      setTime(new Date())
    },1000)
    

  })

  return(
    <div style={{background:'lightgreen',display:'inline-block',top:'50%',left:'50%',transform:'translate(-50%,-50%)',position:'absolute',padding:'12vh'}}>
      <h1>
        
      </h1>
      <Clock value={time} size={300} renderNumbers={true} />
    </div>
  )
}