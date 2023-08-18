import NavBar from "../navBar"
import ContainerUserChats from "../search/containerUserChat"
import SearchUser from "../search/search"

const HeaderHome = ({isMobile}) => {
    return(
        <header className="sticky bg-slate-950 overflow-x-auto scroll-p-0.5 md:w-1/3 md:min-w-[290px]">
            <NavBar />
            {!isMobile ? (
            <section className="p-4 hidden md:block">
                <SearchUser />
                <ContainerUserChats />
            </section>) : ''}
        </header>
    )
}

export default HeaderHome