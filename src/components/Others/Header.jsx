import React from 'react'

const Header = () => {
    return (
        <div className='p-15 flex h-20 items-center justify-between bg-[#1c1c1c]'>
            <h1 className='text-2xl font-semibold'>
                Hello <br /> <span className=' text-3xl'>Kareem👋</span>
            </h1>
            <button className='bg-red-500 px-4 py-2 text-xl font-semibold cursor-pointer rounded'>
                Log Out
            </button>
        </div>
    )
}

export default Header
