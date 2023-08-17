import {SearchIcon} from "../assets/svgs"

const SearchUser = () => {
    return(
        <section className="w-full rounded mb-3 ring-green-500 ring duration-300 hover:ring-4">
            <header className="w-full flex">
                <input className="w-full p-2 bg-transparent text-sm border-r-2 border-green-500 outline-none" type="text" placeholder="find a user"/>
                <div className="flex items-center justify-center p-1 duration-300 hover:bg-slate-700">
                    <SearchIcon />
                </div>
            </header>
        </section>
    )
}

export default SearchUser