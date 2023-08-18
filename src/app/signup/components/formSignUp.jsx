'use client'
import LoadingData from "../../components/LoadingData"
import Image from "next/image"
import signUp from "@/firebase/auth/signup"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const FormSignUp = () => {

    const [confirmPassword, setConfirmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [isSeddingData, setIsSeddingData] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayName, setDisplayName] = useState('')
    const [userIcon, setUserIcon] = useState(null)

    const refUserIcon = useRef()
    const router = useRouter()

    const handleFileChange = (e) => {
        setUserIcon(e.target.files[0] || null)

        if(e.target.files[0]){
            const reader = new FileReader()

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleForm = async (e) => {
        e.preventDefault()
        setConfirmPassword(false)
        setIsSeddingData(prevState => !prevState);

        if (!userIcon) {
            alert("Please choose a file first!")
            setIsSeddingData(prevState => !prevState);
            return
        }

        if (password !== password2) {
            setConfirmPassword(true)
            setIsSeddingData(prevState => !prevState);
            return
        }

        const { result, error } = await signUp(email, password, displayName, userIcon)

        if(error){
            setIsSeddingData(prevState => !prevState);
            return alert(error)
        }

        if(result){
            setIsSeddingData(prevState => !prevState);
        }

        return router.push("/home")
    }

    return(
        <main>
            <LoadingData isSeddingData={isSeddingData}/>

            <form onSubmit={handleForm} className="flex flex-col items-center justify-center p-2 gap-4">

                <input onChange={(e) => setDisplayName(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="text" placeholder="Name" />
                <input onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="password" placeholder="Password"/>
                <input onChange={(e) => setPassword2(e.target.value)} className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="password" placeholder="Password"/>

                <label className="flex gap-3">
                    <input className="hidden" onChange={handleFileChange} ref={refUserIcon} type="file" accept="image/*"/>

                    <input className="px-1 py-2 transition duration-300 bg-green-950 text-sm hover:bg-green-900" type="button" value="Choose Image" onClick={() => refUserIcon.current.click()} />

                    {selectedImage && <Image className="w-10 h-10 object-cover rounded-full" src={selectedImage} width={0} height={0} alt="hola"/>}
                </label>

                {confirmPassword ? <p className="font-semibold">Password do not match</p> : ''}
                <button className="w-1/3 px-1 py-2 transition duration-300 bg-green-950 text-lg uppercase hover:bg-green-900">Sign up</button>

            </form>
        </main>
    )
}

export default FormSignUp