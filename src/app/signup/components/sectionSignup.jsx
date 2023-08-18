import HeaderSignUp from "./headerSignUp"
import FormSignUp from "./formSignUp"
import FooterSignUp from "./footerSignUp"

const SectionSignUp = () => {
    return(
        <section className="w-11/12 flex flex-col p-4 bg-slate-900 md:w-5/12 rounded">
            <HeaderSignUp />
            <FormSignUp />
            <FooterSignUp />
        </section>
    )
}

export default SectionSignUp