import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
const [showNavBar, setShowNavBar] = useState(false);

const showNavBarFn = ()=>{
    setShowNavBar(true);
}

const hideNavBarFn = ()=>{
    setShowNavBar(false);
}

  return (
    
    <>
<div className='flex justify-between items-center'>
<a href="#" className=' md:z-10 md:fixed'><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" width={50} alt="Logo" /></a>



<div className=  'flex justify-end md:mb-4'  >
    <div className= {`w-[40%] h-[100vh] bg-gray-700 fixed top-0 duration-700 text-white ${(showNavBar)? 'right-0' :  'right-[-40%]'} md:flex md:flex-row md:h-auto md:w-[100vw] md:right-0 `} >
    <button className=' text-3xl ml-1 md:hidden' onClick={hideNavBarFn}>&times;</button>
        <ul className=' flex flex-col items-center justify-between h-[30%] md:flex md:flex-row md:justify-end md:h-auto md:w-full md:items-center md:my-4'>
            <li className=' md:mx-8'>
            <NavLink onClick={()=>{
                setShowNavBar(false)
            }} to= '/'
             className={({ isActive }) =>
             `duration-200 text-white`
           }
            >
           Home
            </NavLink>
            </li>

            <li className=' md:mx-8'>
            <NavLink onClick={()=>{
                setShowNavBar(false)
            }} to= '/FeatureSection'
             className={({ isActive }) =>
             `duration-200  text-white `
           }
            >
           Features
            </NavLink>
            </li>

            <li className=' md:mx-8'>
            <NavLink onClick={()=>{
                setShowNavBar(false)
            }} to= '/BlogSection'
             className={({ isActive }) =>
             `duration-200 text-white `
           }
            >
           Blog
            </NavLink>
            </li>

            <li className=' md:mx-8'>
            <NavLink onClick={()=>{
                setShowNavBar(false)
            }} to= '#'
             className={({ isActive }) =>
             `duration-200  text-white `
           }
            >
           Login/Signup
            </NavLink>
            </li>
        </ul>
    </div>
    <button className=' text-3xl mt-2 mr-4' onClick={showNavBarFn}>&#9776;</button>
    </div>


    </div>
    </>
  )
}

export default Header
