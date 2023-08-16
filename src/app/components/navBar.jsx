"use client";
import Image from 'next/image'

const NavBar = () => {

    const imageLoader = () => {
        return 'https://www.crowsworldofanime.com/wp-content/uploads/2022/09/Call_of_the_Night_Episode_11_Figure_05.jpg'
    }

    return(
        <nav className="flex p-5 items-center justify-between">
            <div className='flex items-center gap-4'>
                <Image className='w-16 h-16 object-cover rounded-full' loader={imageLoader} src={'p.jpg'} width={0} height={0} alt='icon' priority/>
                <span className='capitalize text-lg font-semibold'>username</span>
            </div>
                <a href='#' className='text-green-400 font-semibold'>Logout</a>
        </nav>
    )
}

export default NavBar