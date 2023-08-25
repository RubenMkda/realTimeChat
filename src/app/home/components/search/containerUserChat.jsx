import { EmptySearchUsers } from "@/app/components/assets/svgs"
import SearchedChats from "./searchedChats"

const ContainerSearchedUser = ({usersData}) => {
    console.log(usersData)

    return(
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            {usersData.length !== 0 ? usersData.map((userData) => {
                return <SearchedChats key={userData.uid} userData={userData}/>
            }) : <EmptySearchedUsers />}
        </section>
    )
}

const EmptySearchedUsers = () => {
    return (
        <section className="h-full flex flex-col justify-center items-center md:h-[calc(100%-58px)]">
            <EmptySearchUsers />
            <p>No hemos encontrado usuarios todavia, busca personas del todo el mundo</p>
        </section>
    )
}

export default ContainerSearchedUser