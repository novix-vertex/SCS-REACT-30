const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-4 px-8'>
            <h4 className="logo font-semibold flex items-center gap-2"> <img src="./logo.webp" alt="" className='h-6' />BloomFi</h4>
            <menu className='hidden md:flex gap-8 font-semibold'>
                <a href="#">USD bloom</a>
                <a href="#">Business</a>
                <a href="#">Treasury</a>
                <a href="#">Developers</a>
                <a href="#">Join us</a>
            </menu>
            <button className="md:hidden text-2xl">
                ☰
            </button>
            <button className="hidden md:inline-block launch-beta bg-[#2B273E] text-white rounded-full py-2 px-4 text-sm md:text-base">Launch BETA</button>
        </nav>
    )
}

export default Navbar