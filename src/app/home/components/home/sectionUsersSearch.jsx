import { SearchFriendLink, UserChatsLink } from "@/app/components/const/const"
import ContainerSearchedUser from "../search/containerUserChat"
import SearchUser from "../search/search"
import ContainerUserChat from "../chat/containerUserChats"
import { useState } from "react"

const SectionUsersSearch = () => {

    const [usersData, setUsersData] = useState(null)
    const [mainSearch, setMainSearch] = useState(SearchFriendLink)

    return(
        <section className="md:p-4">
            <header className="bg-slate-950">
                <ul className="flex text-sm h-12 items-center text-center">
                    <li className="w-full h-full">
                        <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainSearch(SearchFriendLink)}>Find friends</button>
                    </li>
                    <li className="w-full h-full">
                        <button className="w-full h-full duration-300 hover:bg-slate-700" onClick={() => setMainSearch(UserChatsLink)}>Chats</button>
                    </li>
                </ul>
            </header>
                {mainSearch === SearchFriendLink 
                ? (<main className="p-3">
                    <SearchUser setUsersData={setUsersData}/>
                    <ContainerSearchedUser usersData={usersData}/>
                    </main>)
                : (<main className="p-3">
                    <ContainerUserChat />
                    </main>)}
        </section>
    )
}

export default SectionUsersSearch