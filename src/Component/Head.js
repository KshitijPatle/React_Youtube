import React from 'react'
import { YT_LOGO, HAMB_LOGO, USER_ICON } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { toggleaction } from '../Utils/sideBarSlics';

const Head = () => {

  const dispatch = useDispatch();

  const handleToggleSiseBar = ()=>{
    dispatch(toggleaction())
  }

  return (
    <div className='grid grid-cols-12 p-4 shadow-lg'>
      <div className='col-span-1 flex mx-4'>
        <img className='h-8 cursor-pointer' src={HAMB_LOGO} alt="HBurger Logo" onClick={handleToggleSiseBar} />
        <img className='h-8 ml-4' src={YT_LOGO} alt="YT Logo" />
      </div>
      <div className='col-span-10 flex justify-center text-center'>
        <input className='border border-gray-500 p-2 rounded-l-full w-1/2' type="text" placeholder='Search' />
        <button className='border border-gray-500 p-2 rounded-r-full'>🔍</button>
        <button className='ml-2 '>🎙️</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src={USER_ICON} alt="User Logo" />
      </div>
    </div>
  )
}

export default Head
