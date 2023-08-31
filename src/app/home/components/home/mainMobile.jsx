import { ChatLink, FindUserLink, } from "@/app/components/const/const"
import Chat from "../chat/chat"
import SectionUsersSearch from "./sectionUsersSearch"
import { useMobileContext } from "@/context/MobileContext"

const MainMobile = () => {

    const { mainMobile } = useMobileContext()

    if (mainMobile === FindUserLink){
        return(
            <main className="w-full bg-slate-800 h-[calc(100%-104px)] overflow-x-auto md:h-full md:p-0">
                <SectionUsersSearch />
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
}

export default MainMobile