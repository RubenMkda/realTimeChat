import { IconSendMessage } from "../assets/svgs"

const InputSendMessage = () => {
    return(
        <section>
            <form className="p-2 flex text-sm items-center justify-evenly">
                <input className="w-11/12 p-2 rounded bg-transparent outline" type="text" placeholder="Write Message here" />
                <button className="p-1" type="submit">
                    <IconSendMessage />
                </button>
            </form>
        </section>
    )
}

export default InputSendMessage