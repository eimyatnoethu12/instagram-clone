import React from 'react'
import Body2 from './Body2'
import Body1 from './Body1'

const BodyBar = ({user,handleSignOut}) => {
  return (
    <div>
      <div className='grid grid-cols-3'>
        <div className='col-span-3 sm:col-span-2'>
            <Body1 user={user}/>
        </div>
        <div className=' col-span-1 shadow-sm sm:flex hidden '>
            <Body2  user={user} handleSignOut={handleSignOut}/>
        </div>
      </div>
    </div>
  )
}

export default BodyBar
