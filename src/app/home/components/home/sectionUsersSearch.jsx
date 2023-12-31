import { SearchFriendLink, UserChatsLink } from "@/app/components/const/const"
import ContainerSearchedUser from "../search/containerUserChat"
import SearchUser from "../search/search"
import ContainerUserChat from "../chat/containerUserChats"
import { useState } from "react"

const SectionUsersSearch = () => {

    const [usersData, setUsersData] = useState([])
    const [mainSearch, setMainSearch] = useState(SearchFriendLink)

    return(
        <section className="h-full bg-slate-900 md:p-4 md:h-[calc(100%-58px)]">
            <header className="bg-slate-950">
                <ul className="flex text-sm h-12 items-center text-center">
                    <li className="w-full h-full">
                        <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainSearch(SearchFriendLink)}>Search</button>
                    </li>
                    <li className="w-full h-full">
                        <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainSearch(UserChatsLink)}>Chats</button>
                    </li>
                </ul>
            </header>
                {mainSearch === SearchFriendLink
                ? (<main className="h-[calc(100%-48px)] p-3">
                    <SearchUser setUsersData={setUsersData}/>
                    <ContainerSearchedUser usersData={usersData}/>
                    </main>)
                : (<main className="h-[calc(100%-48px)] p-3">
                    <ContainerUserChat />
                    </main>)}
        </section>
    )
}

export default SectionUsersSearch