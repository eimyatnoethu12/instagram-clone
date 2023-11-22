import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const a=[
{
    imagePath:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Aye Aye",
    Country: "Myanmar"
},
{
    imagePath:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Aye Aye",
    Country: "Myanmar"
},
{
    imagePath:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Aye Aye",
    Country: "Myanmar"
},
{
    imagePath:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Aye Aye",
    Country: "Myanmar"
},
{
    imagePath:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Aye Aye",
    Country: "Myanmar"
},
]

const Body2 = ({user,handleSignOut}) => {
  return (
   <div className='fixed'>
    <div className='flex w-full mt-20'>
        <FontAwesomeIcon icon={faCircleUser}
         className='text-slate-200 text-7xl ' />
         <div className='ml-5 flex flex-col'>
            <small className='mt-2 font-bold text-lg'>{user}</small>
            <small className='mt-1 text-sm'>Myanmar</small>
         </div>
    </div>
    <div className='flex gap-12 mt-3'>
        <div className='text-slate-400'>Suggestions for You</div>
        <div className='font-bold'>See All</div>
    </div>
    <div className='flex flex-col gap-5 mt-4'>
        {a.map((a)=>(
            <div className='flex gap-10 '>
           <div className='flex'>
           <img
         className='rounded-full' src={a.imagePath}
         width={50} height={60} alt='profile'/>
         <div className='ml-5  flex flex-col'>
            <small className='mt-1 font-bold text-sm'>{a.name}</small>
            <small className='mt-1 text-sm'>{a.Country}</small>
         </div>
           </div>
         <div className='text-blue-500 mt-3 ml-5'>Follow</div>
            </div>
        ))}
        
    </div>
   </div>
  )
}

export default Body2
