import React from 'react'

const Navbar = () => {
    return (
       
            <div className='flex justify-between items-center p-3 fixed top-0 z-50 w-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <div className='text-lg'>
                    <li className='list-none cursor-pointer  hover:text-purple-700 hover:scale-110 transition-transform duration-300'>Portfolio <span className='text-purple-700 text-base sm:text-sm md:text-xl'>.</span></li>
                </div>
                <div className='flex space-x-8 list-none nav-list'>
                    <li className='cursor-pointer hover:text-purple-700 hover:scale-110 transition-transform duration-300'>Home</li>
                    <li className='cursor-pointer  hover:text-purple-700 hover:scale-110 transition-transform duration-300'>About</li>
                    <li className='cursor-pointer  hover:text-purple-700 hover:scale-110 transition-transform duration-300'>Skills</li>
                    <li className='cursor-pointer  hover:text-purple-700 hover:scale-110 transition-transform duration-300'>Projects</li>
                    <li className='cursor-pointer  hover:text-purple-700 hover:scale-110 transition-transform duration-300'>Contact Us</li>
                </div>
            </div>
        
    )
}

export default Navbar