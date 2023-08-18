import FooterLogin from "./components/footerLogin"
import HeaderLogin from "./components/headerLogin"
import MainLogin from "./components/mainLogin"

const LoginUser = () => {

    return(
        <main className="m-full h-full bg-neutral-950 text-zinc-200 flex items-center justify-center">
            <section className="w-11/12 flex flex-col p-4 bg-neutral-900 md:w-6/12 rounded">
                <HeaderLogin />
                <MainLogin />
                <FooterLogin />
            </section>
        </main>
    )
}

export default LoginUser