import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between'>
            <h4 className="logo font-[600] flex justify-center items-center"> <img src="/logo.webp" alt="" className='h-6' />BloomFi</h4>
            <menu className='flex gap-15 font-[600]'>
                <a href="#">USD bloom</a>
                <a href="#">Business</a>
                <a href="#">Treasury</a>
                <a href="#">Developers</a>
                <a href="#">Join us</a>
            </menu>
            <button className="launch-beta bg-[#2B273E] text-white rounded-4xl py-2 px-5">Launch BETA</button>
        </nav>
    )
}

export default Navbar