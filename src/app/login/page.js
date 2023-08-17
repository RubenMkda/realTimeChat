'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import signIn from "../firebase/auth/signin"

const LoginUser = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (e) => {
        e.preventDefault()

        const {result, error} = await signIn(email, password)
    
        if(error){
            console.log(error)
        }

        console.log(result)
        return router.push('/home')
    }

    return(
        <main className="m-full h-full bg-neutral-950 text-zinc-200 flex items-center justify-center">
            <section className="w-11/12 flex flex-col p-4 bg-neutral-900 md:w-6/12 rounded">
                <header className="p-4 text-5xl text-green-400 text-center uppercase font-bold">
                    <h2>Login</h2>
                </header>
                <main>
                    <form onSubmit={handleForm} className="flex flex-col items-center justify-center p-2 gap-4">
                        <input onChange={e => setEmail(e)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="email" />
                        <input onChange={e => setPassword(e)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="password" />
                        <button className="w-1/3 px-1 py-2 transition duration-300 bg-green-950 text-lg uppercase hover:bg-green-900">Sign in</button>
                    </form>
                </main>
                <footer className="flex flex-col items-center justify-center">
                    <p>You don&apos;t have an account?</p>
                    <Link className="group transition duration-300 text-xl text-green-500" href='/signup'>
                        Register
                         <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                </footer>
            </section>
        </main>
    )
}

export default LoginUser