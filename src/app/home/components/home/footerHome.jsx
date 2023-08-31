import { ChatLink, FindUserLink, SettingsLink } from "@/app/components/const/const"
import { useMobileContext } from "@/context/MobileContext"

const FooterHome = () => {

    const { setMainMobile } = useMobileContext()
    
    return(
        <footer className="sticky bg-slate-950 bottom-0 h-12 md:hidden">
            <ul className="flex text-sm h-full items-center text-center">
                <li className="w-full h-full">
                    <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainMobile(FindUserLink)}>Find friends</button>
                </li>
                <li className="w-full h-full">
                    <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainMobile(ChatLink)}>Chat</button>
                </li>
            </ul>
        </footer>
    )
}

export default FooterHome