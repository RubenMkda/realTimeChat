const { default: UserChats } = require("./UserChats")

const ContainerUserChats = () => {
    return(
        <section className="h-[calc(100%-48px)] overflow-y-auto scroll-p-0.5">
            <UserChats />
            <UserChats />
        </section>
    )
}

export default ContainerUserChats