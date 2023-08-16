import Link from "next/link"

const RegisterUser = () => {
    return(
        <main className="m-screen h-screen bg-neutral-950 text-zinc-200 flex items-center justify-center">
            <section className="w-11/12 flex flex-col p-4 bg-neutral-900 md:w-5/12 rounded">
                <header className="p-4 text-5xl text-green-400 text-center uppercase font-bold">
                    <h2>Register</h2>
                </header>
                <main>
                    <form className="flex flex-col items-center justify-center p-2 gap-4">
                        <input className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="name" placeholder="Name" />
                        <input className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="email" placeholder="Email" />
                        <input className="w-full p-4 bg-transparent outline-0 border-b-2 border-green-400" type="password" placeholder="Password"/>
                        <input type="file" id="file"/>
                        <label htmlFor="file">
                        {/* <img src={avatar} alt="" className='imgAvatar'/> */}
                        </label>
                        <button className="w-1/3 px-1 py-2 transition duration-300 bg-green-950 text-lg uppercase hover:bg-green-900">Sign up</button>
                    </form>
                </main>
                <footer className="flex flex-col items-center justify-center">
                    <p>You have an account?</p>
                    <Link className="group transition duration-300 text-xl text-green-500" href='/login'>
                        Login
                         <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                    </Link>
                </footer>
            </section>
        </main>
    )
}

export default RegisterUser