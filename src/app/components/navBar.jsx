"use client";
import Image from 'next/image'

const NavBar = () => {

    const imageLoader = () => {
        return 'https://www.crowsworldofanime.com/wp-content/uploads/2022/09/Call_of_the_Night_Episode_11_Figure_05.jpg'
    }

    return(
        <nav className="h-14 flex p-5 items-center justify-between bg-slate-900">
            <section className='flex items-center gap-4'>
                <div className='w-10 h-10 overflow-hidden rounded-full'>
                    <Image className='w-11 h-11 object-cover' loader={imageLoader} src={'p.jpg'} width={0} height={0} alt='icon'/>
                </div>
                <span className='capitalize text-lg font-semibold'>username</span>
            </section>
                <a href='#' className='text-green-400 font-semibold'>Logout</a>
        </nav>
    )
}

export default NavBar