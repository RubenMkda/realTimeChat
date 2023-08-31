import { ChangeUserChat, ChatLink } from "@/app/components/const/const"
import { useMobileContext } from "@/context/MobileContext"
import { useChathContext } from "@/context/chatContext"
import Image from "next/image"

const UserChat = ({userChat}) => {

    const userInfo = userChat.userInfo

    const { dispatch } = useChathContext()
    const { setMainMobile } = useMobileContext()


    const imageLoader = () => {
        return userInfo.photoURL
    }

    const handleSelect = (u) => {
        setMainMobile(ChatLink)
        dispatch({ type: ChangeUserChat, payload: u })
    }
    
    return(
        <section className="w-full flex border-b-2 border-slate-400 items-center gap-3 bg-slate-900 p-4 duration-300 hover:bg-slate-800 active:bg-slate-900" onClick={() => handleSelect(userInfo)}>
            <header className="w-2/3 flex items-center gap-3">
                <section className="w-10 h-10 overflow-hidden md:w-9 md:h-9 rounded-full">
                    <Image className='w-11 h-11 md:w-10 md:h-10 object-cover' loader={imageLoader} src={'img.png'} alt="hola" width={0} height={0}/>
                </section>
                <section className="self-start p-1">
                    <p className="text-lg capitalize">{userInfo?.username}</p>
                    <p className="text-xs">{userChat.lastMessage ? userChat.lastMessage.text : 'Send me a message.'}</p>
                </section>
            </header>
        </section>
    )
}

export default UserChat