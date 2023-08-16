import NavBar from "../components/navBar"
import UserChats from "../components/search/search";
import ContainerUserChats from "../components/search/containerUserChat";
import Chat from "../components/chat/chat";

const UserHome = () => {
    return(
        <section className="h-screen md:flex">
            <header className="w-2/3 sticky bg-slate-950 overflow-x-auto scroll-p-0.5">
                <NavBar />
                <section className="p-4 hidden md:block">
                    <UserChats />
                    <ContainerUserChats />
                </section>
            </header>
            <main className="w-full p-4 bg-slate-800 h-[calc(100%-152px)] overflow-x-auto md:h-full md:p-0">
                <section className="h-full md:hidden">
                    <UserChats />
                    <ContainerUserChats />
                </section>
                <Chat />
            </main>
            <footer className="sticky bg-slate-950 bottom-0 h-12 md:hidden">
                <ul className="flex text-sm h-full items-center text-center">
                    <li className="w-full">Find friends</li>
                    <li className="w-full">Chat</li>
                    <li className="w-full">Settings</li>
                </ul>
            </footer>
        </section>
    )
}

export default UserHome