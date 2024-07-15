import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBoard'
const App = () => {
    const [category , setCategory] = useState("general") //default catorgary
  return (
    
    <div>
     <Navbar setCategory = {setCategory}/> 
     <NewsBoard category={category}/>
    </div>
  )
}

export default App
