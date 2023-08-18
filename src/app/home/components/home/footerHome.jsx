import { ChatLink, FindUserLink, SettingsLink } from "@/app/components/const/const"

const FooterHome = ({setMainMobile}) => {
    
    return(
        <footer className="sticky bg-slate-950 bottom-0 h-12 md:hidden">
            <ul className="flex text-sm h-full items-center text-center">
                <li className="w-full h-full">
                    <button className="w-full h-full" onClick={() => setMainMobile(FindUserLink)}>Find friends</button>
                </li>
                <li className="w-full h-full">
                    <button className="w-full h-full" onClick={() => setMainMobile(ChatLink)}>Chat</button>
                </li>
                <li className="w-full h-full">
                    <button className="w-full h-full" onClick={() => setMainMobile(SettingsLink)}>Settings</button>
                </li>
            </ul>
        </footer>
    )
}

export default FooterHome