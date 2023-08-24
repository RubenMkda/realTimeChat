import HeaderChat from "./headerChat"
import InputSendMessage from "./input"
import Messages from "./messages"

const Chat = () => {

    return(
        <section className="h-full flex flex-col">
            <header className="hidden h-14 p-2 bg-slate-950 md:flex items-center relative">
                <HeaderChat />
            </header>
            <main className="w-full p-4 h-full overflow-y-scroll md:p-6 bg-slate-900 bg-cover" style={{backgroundImage: "url(" + `${("/hero-image.png")}`}}>
                <Messages />
            </main>
            <footer className="h-14">
                <InputSendMessage />
            </footer>
        </section>
    )
}

export default Chat