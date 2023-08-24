import { useState } from "react"
import { SearchIcon } from "../../../components/assets/svgs"
import getUsers from "@/firebase/data/search"

const SearchUser = ({setUsersData}) => {

    const [username, setUserName] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()

        const Data = await getUsers(username)

        setUsersData(Data)
    }

    return(
        <section className="w-full rounded my-2 ring-green-500 ring duration-300 hover:ring-4">
            <header className="w-full flex">

                <form onSubmit={handleSearch} className="w-full flex">
                    <input onChange={e => setUserName(e.target.value.toLowerCase())} className="w-full p-2 bg-transparent text-sm border-r-2 border-green-500 outline-none" type="text" placeholder="find a user"/>
                    <button type="submit" className="flex items-center justify-center p-1.5 duration-300 hover:bg-slate-700"><SearchIcon /></button>
                </form>

            </header>
        </section>
    )
}

export default SearchUser