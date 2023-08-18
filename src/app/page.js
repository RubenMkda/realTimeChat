import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <section className="w-full h-full p-2 flex flex-col items-center justify-center md:flex-row">
      <header className="w-full flex flex-col p-2 items-center justify-center gap-3">
        <Image className="w-80 h-80" src={'/imageHome.png'} width={350} height={0} alt="imageHome" priority/>
        <h1 className="text-6xl font-bold uppercase text-emerald-400 md:text-7xl lg:text-8xl">ChatLine</h1>
      </header>
      <main className="text-md md:text-xl lg:text-2xl">
        <section className="p-3">
          <p className="text-zinc-300">Chat with people around the world! Connect, converse, and expand your global network. Experience real-time conversations, explore different cultures, and make international friends.</p>
        </section>
        <section className="p-3 flex items-center justify-evenly">
          <Link className="group transition duration-300 text-xl text-green-500" href='/signup'>
            Register
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
            <Link className="group transition duration-300 text-xl text-green-500" href='/login'>
            Login
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
            </Link>
        </section>
      </main>
    </section>
  )
}

export default Home