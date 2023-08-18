import Link from "next/link"

const FooterSignUp = () => {
    return(
        <footer className="flex flex-col items-center justify-center">
            <p>Do you have an account?</p>
            <Link className="group transition duration-300 text-xl text-green-500" href='/login'>
                Login
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
        </footer>
    )
}

export default FooterSignUp