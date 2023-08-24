import { useChathContext } from "@/context/chatContext"
import Message from "./message"
import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/config"
import { useAuthContext } from "@/context/AuthContext"


const Messages = () => {

    const [messages, setMessages] = useState([])
    const { data } = useChathContext()
    const { user } = useAuthContext()

    useEffect(() => {
        if(data.chatId == null) return
        
        const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unSub()
        }
    }, [data.chatId])

    console.log(messages)

    return(
        <>
            {messages.map((message) => {
                const isSendByThisUser = message.senderId !== user.uid
                return <Message key={message.id} isSendByThisUser={isSendByThisUser} message={message}/>
            })}
            {/* <Message user={true}/>
            <Message user={false}/> */}
        </>
    )
}

export default Messages