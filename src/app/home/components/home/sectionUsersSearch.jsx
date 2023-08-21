import ContainerUserChats from "../search/containerUserChat"
import SearchUser from "../search/search"

const { useState } = require("react")

const SectionUsersSearch = () => {

    const [usersData, setUsersData] = useState(null)

    return(
        <section className="md:p-4">
            <SearchUser setUsersData={setUsersData}/>
            <ContainerUserChats usersData={usersData}/>
        </section>
    )
}

export default SectionUsersSearch