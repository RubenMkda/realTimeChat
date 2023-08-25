import { useChathContext } from "@/context/chatContext"
import HeaderChat from "./headerChat"
import InputSendMessage from "./input"
import Messages from "./messages"
import EmptyChat from "./EmptyChat"

const Chat = () => {

    const { data } = useChathContext()

    return(
        <section className="h-full flex flex-col items-center justify-center">
            {data.chatId !== null ? <ChatUser /> : <EmptyChat />}
        </section>
    )
}

const ChatUser = () => {
    return(
        <>
            <header className="w-full hidden h-14 p-2 bg-slate-950 md:flex items-center relative">
                <HeaderChat />
            </header>
            <main className="w-full p-4 h-full overflow-y-scroll md:p-6 bg-slate-900 bg-cover" style={{backgroundImage: "url(" + `${("/hero-image.png")}`}}>
                <Messages />
            </main>
            <footer className="w-full h-14">
                <InputSendMessage />
            </footer>
        </>
    )
}

export default Chat