import HeaderChat from "./headerChat"
import Messages from "./messages"

const Chat = () => {
    return(
        <section className="hidden h-full md:flex md:flex-col">
            <header className="h-14 p-2 bg-slate-900 flex items-center relative">
                <HeaderChat />
            </header>
            <main className="w-full h-full overflow-y-scroll p-6 bg-slate-900 bg-cover" style={{backgroundImage: "url(" + `${("/hero-image.png")}`}}>
                <Messages />
            </main>
            <footer className="h-14">Footer</footer>
        </section>
    )
}

export default Chat