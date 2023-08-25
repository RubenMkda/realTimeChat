import Chat from "../chat/chat"

const MainHome = () => {
    return(
        <main className="w-full bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
            <Chat />
        </main>
    )
}

export default MainHome