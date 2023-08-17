import { ChatLink, FindUserLink, SettingsLink } from "@/app/const/const"
import ContainerUserChats from "../search/containerUserChat"
import SearchUser from "../search/search"
import Chat from "../chat/chat"

const MainMobile = ({mainMobile}) => {

    if (mainMobile === FindUserLink){
        return(
            <main className="w-full p-4 bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
                <section className="md:hidden">
                    <SearchUser />
                    <ContainerUserChats />
                </section>
            </main>
        )
    }

    if (mainMobile === ChatLink){
        return(
            <main className="w-full bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
                <section className="h-full md:hidden">
                    <Chat />
                </section>
            </main>
        )
    }

    if (mainMobile === SettingsLink){
        return(
            <main className="w-full bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
                <section className="h-full md:hidden">
                    <span>Seccion de settings al final del proyecto</span>
                </section>
            </main>
        )
    }

    return(
        <main className="w-full p-4 bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
            <p>error</p>
        </main>
    )
}

export default MainMobile