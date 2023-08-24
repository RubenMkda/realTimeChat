import SearchedChats from "./searchedChats"

const ContainerSearchedUser = ({usersData}) => {
    return(
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            {usersData ? usersData.map((userData) => {
                return <SearchedChats key={userData.uid} userData={userData}/>
            }) : ''}
        </section>
    )
}

export default ContainerSearchedUser