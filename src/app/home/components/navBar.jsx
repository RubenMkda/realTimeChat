"use client";
import { useAuthContext } from '@/context/AuthContext';
import Image from 'next/image'
import { signOut } from 'firebase/auth';
import { auth } from '@/config';

const NavBar = () => {

    const { user } = useAuthContext()

    const imageLoader = () => {
        return user.photoURL
    }

    return(
        <nav className="h-14 flex p-5 items-center justify-between bg-slate-900">
            <section className='flex items-center gap-4'>
                <div className='w-10 h-10 overflow-hidden rounded-full'>
                    <Image className='w-11 h-11 object-cover' loader={imageLoader} src={'p.jpg'} width={150} height={0} alt='icon' priority/>
                </div>
                <span className='capitalize text-lg font-semibold'>{user.displayName}</span>
            </section>
            <button onClick={() => signOut(auth)} className="text-slate-950 font-semibold px-2 py-1 transition duration-300 bg-green-500 text-lg capitalize hover:bg-green-400">Logout</button>
        </nav>
    )
}

export default NavBar