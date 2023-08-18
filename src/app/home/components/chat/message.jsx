const Message = ({user}) => {
    return(
        <div className={"w-full flex " + (user ? '' : 'flex-row-reverse')}>
        <section className={"my-3 p-3 w-full max-w-[60%] relative " + (user ? 'bg-slate-600' : 'bg-emerald-700')}>
            <header>
                <p className={"text-gray-300 text-xs pb-2 " + (user ? '' : 'text-right')}>02/12/2012 1:13 p.m</p>
            </header>
            <main className="text-sm w-full">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, repellat. Aliquam natus sint sit nisi totam quos ad adipisci vitae ab ipsa, porro iusto accusamus. Blanditiis numquam saepe voluptatem optio.</p>
            </main>
        </section>
        </div>
    )
}

export default Message