
import { useState } from 'react'
import './App.css'

function App() {
  
  const [count,setcount ] = useState('black')

  return (
    <>



   
      <div className="bg" style={{background:count}}>

     
        <div className="warpper">
          <button style={{background:'red'}} onClick={
            ()=>{
              setcount('red')
            }
          }>red</button>
          <button style={{background:'green'}}  onClick={()=>{ setcount('green')}}
          >green</button>
          <button style={{background:'blue'}}   onClick={()=>{ setcount('blue')}} >blue</button>
          <button style={{background:'yellow'}}   onClick={()=>{ setcount('yellow')}} >yellow</button>
        </div>

      </div>
    </>
  )
}

export default App
