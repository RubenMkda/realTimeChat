import { useState } from "react"
import { SearchIcon } from "../../../components/assets/svgs"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "@/config"

const SearchUser = () => {

    const [username, setUserName] = useState("")

    const handleSearch = async(e) => {
        e.preventDefault()

        const usersRef = collection(db, "users")

        const q = query(
            usersRef,
            where('username', '==', username)
        )

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
                console.log(doc.data())
            });
    }

    return(
        <section className="w-full rounded mb-3 ring-green-500 ring duration-300 hover:ring-4">
            <header className="w-full flex">
                <form onSubmit={handleSearch} className="w-full flex">
                    <input onChange={e => setUserName(e.target.value)} className="w-full p-2 bg-transparent text-sm border-r-2 border-green-500 outline-none" type="text" placeholder="find a user"/>
                    <button type="submit" className="flex items-center justify-center p-1.5 duration-300 hover:bg-slate-700">
                    <SearchIcon />
                </button>
                </form>
            </header>
        </section>
    )
}

export default SearchUser