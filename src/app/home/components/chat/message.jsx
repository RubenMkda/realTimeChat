const Message = ({isSendByThisUser, message}) => {

    const date = message.date.toDate().toLocaleTimeString()

    return(
        <div className={"w-full flex " + (isSendByThisUser ? '' : 'flex-row-reverse')}>
        <section className={"my-3 p-3 w-full max-w-[60%] relative " + (isSendByThisUser ? 'bg-slate-600' : 'bg-emerald-700')}>
            <header>
                <p className={"text-gray-300 text-xs pb-2 " + (isSendByThisUser ? '' : 'text-right')}>{date}</p>
            </header>
            <main className="text-sm w-full">
                <p>{message.text}</p>
            </main>
        </section>
        </div>
    )
}

export default Message