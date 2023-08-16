'use client'
const { default: Image } = require("next/image")

const UserChats = () => {

    const imageLoader = () => {
        return 'https://pbs.twimg.com/media/E1ZKLaNXEAUWd0E.jpg'
    }

    return(
        <section className="w-full flex rounded-t-lg border-b-2 border-slate-400 items-center gap-3 bg-slate-950 p-4 duration-300 hover:bg-slate-900 active:bg-slate-900">
            <header className="w-2/3 flex items-center gap-3">
            <Image className='w-12 h-12 object-cover rounded-full' loader={imageLoader} src={'img.png'} alt="hola" width={0} height={0}/>
            <div className="self-start p-1">
                <p>Username2</p>
                <p className="text-xs">Último mensaje</p>
            </div>
            </header>
            <footer className="p-1 w-1/3 self-start text-right">
                <p>hola bb</p>
            </footer>
        </section>
    )
}

export default UserChats