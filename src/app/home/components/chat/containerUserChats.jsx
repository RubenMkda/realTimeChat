import { useEffect, useState } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/config"
import UserChat from "./userChat"
import ChatLoader from "./chatsLoader"

const ContainerUserChat = () => {

    const [chats, setChats] = useState([])

    const { user } = useAuthContext()

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
                const chatsData = doc.data() ? doc.data() : []
                setChats(chatsData)
            })

            return () => {
                unsub()
            }
        }

        user.uid && getChats()
    }, [user.uid])

    return (
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            {chats.length !== 0 ? Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
                return <UserChat key={chat[0]} userChat={chat[1]} />
            }) : <ChatLoader />}
        </section>
    )
}

export default ContainerUserChat