import { useEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/config"
import UserChat from "./userChat"
import ChatLoader from "./chatsLoader"

const ContainerUserChat = () => {

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(true)

    const { user } = useAuthContext()

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
                const chatsData = doc.data() === {} ? doc.data() : []
                setChats(chatsData)
            })
            
            return () => {
                unsub()
            }
        }
        
        user.uid && getChats()
        setLoading(false)
    }, [user.uid])

    if (loading){
        return(
            <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
                <ChatLoader />
            </section>
        )
    }

    return (
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            {chats.length !== 0  ? Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
                return <UserChat key={chat[0]} userChat={chat[1]} />
            }) : <EmptySearchedUsers />}
        </section>
    )
}

const EmptySearchedUsers = () => {
    return (
        <section className="h-full flex flex-col justify-center items-center md:h-[calc(100%-58px)]">
            <EmptySearchedUsers />
            <p>No hemos encontrado usuarios todavia, busca personas del todo el mundo</p>
        </section>
    )
}

export default ContainerUserChat