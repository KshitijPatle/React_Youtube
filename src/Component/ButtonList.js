import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const btnItem = ["All" , "Music" , "T-Series" , "Lo-Fi" , "Trade"  , "Education" , "Sports" , "News", "Electronics","Civil" ,"Electrical" , "Mecanical" , "Art" , "Craft" , "Latest"  ,"Arjit" ,"PodCast", "New"]
  return (
    <div className='flex'>
      {btnItem.map((itm, index)=>(<Button key={index} name={itm} />))}
    </div>
  )
}

export default ButtonList
