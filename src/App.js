import React from "react"
import Navbar from "./componenets/Navbar"
import Cards from "./componenets/Cards"
import "./style.css";
import data from "./data"

export default function App() {

  const cardElements = data.map(item => {
    return (
      <Cards
        key = {item.id}
        item = {item} 
      />

    )
  })
  
  
  
  return(
    <div className="app--container"> 
    <Navbar/>
    <data />
    <div className="cards--container">
            {cardElements}
        </div>
    </div>
      
  )
}


