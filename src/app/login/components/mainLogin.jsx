'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import signIn from "@/firebase/auth/signin"

const MainLogin = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (e) => {
        e.preventDefault()

        const {result, error} = await signIn(email, password)

        if(error){
            console.log(error)
            return
        }

        return router.push('/home')
    }

    return(
        <main>
            <form onSubmit={handleForm} className="flex flex-col items-center justify-center p-2 gap-4">
                <input onChange={e => setEmail(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="email" placeholder="Email"/>
                <input onChange={e => setPassword(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="password" placeholder="Password"/>
                <button type="submit" className="w-1/3 px-1 py-2 transition duration-300 bg-green-950 text-lg uppercase hover:bg-green-900">Sign in</button>
            </form>
        </main>
    )
}

export default MainLogin