import { GoBackIcon } from "../assets/svgs"

const HeaderChat = () => {
    return(
        <section className="flex items-center gap-3 p-2">
            <GoBackIcon />
            <div>
                <p>UserName</p>
                <p className="text-xs">En linea</p>
            </div>
        </section>
    )
}

export default HeaderChat