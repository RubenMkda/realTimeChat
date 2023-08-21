import UserChats from "./userChats"

const ContainerUserChats = ({usersData}) => {

    return(
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            {usersData ? usersData.map((userData) => {
                return <UserChats key={userData.uid} userData={userData}/>
            }) : ''}
            {/* <UserChats /> */}
        </section>
    )
}

export default ContainerUserChats