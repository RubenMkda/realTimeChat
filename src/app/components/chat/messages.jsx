const { default: Message } = require("./message")

const Messages = () => {
    return(
        <>
            <Message user={true}/>
            <Message user={false}/>
        </>
    )
}

export default Messages