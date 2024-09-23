import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {

  const showSideBar = useSelector((store)=>store.sideBar.isMenuOpen)

  if(!showSideBar) return null;
  
  return (
    <div className='shadow-lg w-48 p-4'>
    <div className='p-2'>
      <h1 className='font-bold text-lg'>Home</h1>
      <ul className='m-2 cursor-pointer'>
        <li>🚉 Subscribed</li>
        <li>📲 Recent</li>
        <li>🫷🏿 History</li>
        <li>🧊 Saved</li>
      </ul>
      </div>
    <div className='p-2'>
      <h1 className='font-bold text-lg'>Subscriptions</h1>
      <ul className='m-2 cursor-pointer'>
        <li>🎵 Music</li>
        <li>🏂🏿 Sports</li>
        <li>🏐 Gaming</li>
        <li>🎥 Movies</li>
      </ul>
      </div>
      <div className='p-2 mt-2'>
      <h1 className='font-bold text-lg'>Explore</h1>
      <ul className='m-2 cursor-pointer'>
        <li>💹 Trending</li>
        <li>🎶 Music</li>
        <li>🔴 Live</li>
        <li>📰 News</li>
        <li>📔 Education</li>
        <li>🥻 Fashion</li>
      </ul>
      </div>
    </div>
  )
}

export default SideBar
