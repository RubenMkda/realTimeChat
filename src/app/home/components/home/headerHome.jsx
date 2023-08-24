import NavBar from "../navBar"
import SectionUsersSearch from "./sectionUsersSearch"

const HeaderHome = ({isMobile}) => {

    return(
        <header className="sticky bg-slate-950 overflow-x-auto scroll-p-0.5 md:w-1/3 md:min-w-[380px]">
            <NavBar />
            {!isMobile ? (
            <SectionUsersSearch />) : ''}
        </header>
    )
}

export default HeaderHome