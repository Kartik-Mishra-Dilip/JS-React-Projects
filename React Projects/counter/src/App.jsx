import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //FOR BASIC 
  // let [counter,setCounter]=useState(15)
  // //let counter=15
  // const addValue=() =>{
    
    
  //   console.log("value added",counter);
  //   setCounter(counter +1)
  // }
  // const removeValue=() =>{
  //   setCounter(counter-1)
  // }


  //FOR VALUE NOT IN NEGATIVE AND LESS THAN 20
  // let [value, setValue] = useState(0)
  // const addValue = () => {
  // if (value == 20){
  //   setValue(value = 20)
  // }
  // else{
  //   setValue(value+1)
  // }
    
  // }
  
  // const removeValue = () => {
  //   if (value > 0){
  //     setValue(value - 1)
  //   }
  //   else{
  //     setValue(value = 0)
  //   }
   
  // }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{value}</h2>

      <button
      onClick={addValue} 
      >add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App

