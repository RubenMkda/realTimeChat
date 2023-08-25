import { useEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/config"
import UserChat from "./userChat"
import ChatLoader from "./chatsLoader"
import { EmptySearchUsers } from "@/app/components/assets/svgs"

const ContainerUserChat = () => {

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(true)

    const { user } = useAuthContext()

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
                const chatsData = doc.data() !== {} ? doc.data() : []
                setChats(chatsData)
                setLoading(false)
            })

            return () => {
                unsub()
            }
        }
        
        user.uid && getChats()
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
            {chats.length === 0 ? <EmptySearchedUsers /> : Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
                 return <UserChat key={chat[0]} userChat={chat[1]} />
            })}
        </section>
    )
}

const EmptySearchedUsers = () => {
    return (
        <section className="pt-5 h-full flex flex-col justify-center items-center md:h-[calc(100%-58px)]">
            <EmptySearchUsers />
            <p className="text-center">You don&apos;t have chats, look for friends to start a chat.</p>
        </section>
    )
}

export default ContainerUserChat