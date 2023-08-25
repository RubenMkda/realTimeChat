import { db } from "@/config"
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { IconSendMessage } from "../../../components/assets/svgs"
import { useAuthContext } from "@/context/AuthContext"
import { useChathContext } from "@/context/chatContext"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const InputSendMessage = () => {

    const [text, setText] = useState("")

    const { user } = useAuthContext()
    const { data } = useChathContext()

    const handleSendMessage = async(e) => {
        e.preventDefault()

        if (data.chatId == null) return
        if (text === "") return

        await updateDoc(doc(db, 'chats', data.chatId), {
            messages: arrayUnion({
                id: uuidv4(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
            })
        })

        await updateDoc(doc(db, 'userChats', user.uid), {
            [data.chatId + '.lastMessage']: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("")
    }

    return(
        <section>
            <form onSubmit={e => handleSendMessage(e)} className="p-2 flex text-sm items-center justify-evenly">
                <input className="w-11/12 p-2 rounded bg-transparent outline" type="text" placeholder="Write Message here" onChange={e => setText(e.target.value)} value={text}/>
                <button className="p-1" type="submit">
                    <IconSendMessage />
                </button>
            </form>
        </section>
    )
}

export default InputSendMessage