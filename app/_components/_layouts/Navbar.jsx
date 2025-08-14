import React from 'react'

function Navbar() {
  return (
    <div className='px-6 lg:px-24 py-6 absolute top-0 w-full z-50'>
      <nav className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Start logo */}
        <div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              You<span className='text-blue-400 font-extrabold'>Comminuty</span>
            </h3>
        </div>

        {/* start menu */}
        <div className='hidden md:block'>
            <div className='flex gap-8 items-center'>
                <a className='text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer'>Home</a>
                <a className='text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer'>About</a>
                <a className='text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer'>Community</a>
                <a className='text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer'>Contact</a>
                <div className='flex gap-4 ml-4'>
                    <button className='px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25'>Login</button>
                    <button className='px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 transform hover:scale-105'>Sign Up</button>
                </div>
            </div>
        </div>
        
        {/* Mobile menu button */}
        <div className='md:hidden'>
            <button className='text-white p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
