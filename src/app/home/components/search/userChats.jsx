import Image from "next/image"

const UserChats = ({userData}) => {

    const imageLoader = () => {
        return userData.photoURL
    }

    return(
        <section className="w-full flex rounded-t-lg border-b-2 border-slate-400 items-center gap-3 bg-slate-950 p-4 duration-300 hover:bg-slate-900 active:bg-slate-900">
            <header className="w-2/3 flex items-center gap-3">
            <section className="w-10 h-10 overflow-hidden md:w-9 md:h-9 rounded-full">
                <Image className='w-11 h-11 md:w-10 md:h-10 object-cover' loader={imageLoader} src={'img.png'} alt="hola" width={0} height={0}/>
            </section>
            <section className="self-start p-1">
                <p className="text-md">{userData.username}</p>
                <p className="text-[10px]">Último mensaje</p>
            </section>
            </header>
            <footer className="w-1/3 self-start text-right">
                <section className="p-1">
                    <span className="text-sm">Hola</span>
                </section>
            </footer>
        </section>
    )
}

export default UserChats