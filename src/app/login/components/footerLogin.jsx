import Link from "next/link"

const FooterLogin = () => {
    return(
        <footer className="flex flex-col items-center justify-center">
            <p>You don&apos;t have an account?</p>
            <Link className="group transition duration-300 text-xl text-green-500" href='/signup'>
            Register
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
        </footer>
    )
}

export default FooterLogin