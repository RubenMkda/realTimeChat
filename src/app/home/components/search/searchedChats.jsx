import { useAuthContext } from "@/context/AuthContext"
import { useState } from "react"

import addingChat from "@/firebase/data/addingChat"
import LoadingData from "@/app/components/LoadingData"
import Image from "next/image"

const SearchedChats = ({userData}) => {

    const { user } = useAuthContext()
    const [isSeddingData, setIsSeddingData] = useState(false)

    const handleSelect = async (data) => {
        setIsSeddingData(true)
        const result = await addingChat(data, user)
        setIsSeddingData(result)
    }

    const imageLoader = () => {
        return userData.photoURL
    }

    return(
        <section className="w-full flex border-b-2 border-slate-400 items-center gap-3 bg-slate-900 p-4 duration-300 hover:bg-slate-800 active:bg-slate-900" onClick={() => handleSelect(userData)}>
            <LoadingData isSeddingData={isSeddingData}/>
            <header className="w-2/3 flex items-center gap-3">
                <section className="w-10 h-10 overflow-hidden md:w-9 md:h-9 rounded-full">
                    <Image className='w-11 h-11 md:w-10 md:h-10 object-cover' loader={imageLoader} src={'img.png'} alt="hola" width={0} height={0}/>
                </section>
                <section className="self-start p-1">
                    <p className="text-lg capitalize">{userData.username}</p>
                </section>
            </header>
        </section>
    )
}

export default SearchedChats