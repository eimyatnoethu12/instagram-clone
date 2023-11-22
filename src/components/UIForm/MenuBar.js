import React from 'react'
import PostList from '../PostList'
import { Input } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPaperPlane,faHeart,faCircleInfo,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import BodyBar from './BodyBar'

const MenuBar = ({user,handleSignOut}) => {
  return (
    <div className='  '>
      <div className='flex  justify-evenly p-4 bg-slate-50 shadow-sm fixed w-full'>
        <div className=' font-extrabold text-xl font-serif'>Instagram</div>
        <input placeholder='Search'
         className='border rounded-lg text-center
          px-3 py-1 border-black outline-none bg-none '/>  
          <div className='w-24 md:text-lg  gap-2  flex md:gap-6'>
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faPaperPlane} />
          <FontAwesomeIcon icon={faCircleInfo} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCircleUser} className='text-slate-400' />

        </div>
      


        {/* <h1>Welcome, {user}!</h1>
          <button onClick={handleSignOut}>Sign Out</button> */}
          {/* <PostList /> */}
        </div>
        <BodyBar  user={user} handleSignOut={handleSignOut}/>
    </div>
  )
}

export default MenuBar
