import { useChathContext } from "@/context/chatContext"
import { GoBackIcon } from "../../../components/assets/svgs"

const HeaderChat = () => {

    const { data } = useChathContext()

    return(
        <section className="flex items-center gap-3 p-2">
            <GoBackIcon />
            <div>
                <p className='capitalize'>{data.user?.username}</p>
            </div>
        </section>
    )
}

export default HeaderChat