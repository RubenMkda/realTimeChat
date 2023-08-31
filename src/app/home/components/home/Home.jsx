'use client'
import { useEffect, useState } from "react"
import FooterHome from "./footerHome"
import HeaderHome from "./headerHome"
import MainHome from "./mainDestokp"
import MainMobile from "./mainMobile"
import { FindUserLink } from "@/app/components/const/const"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { MobileContextProvider } from "@/context/MobileContext"

const SectionHome = () => {

    const [isMobile, setIsMobile] = useState(true)

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(()=> {
        if (user == null) router.push('/')

        const destopkMediaQuery = window.matchMedia('(min-width: 768px)')

        setIsMobile(!destopkMediaQuery.matches)

        destopkMediaQuery.addEventListener('change', e => {
            if(e.matches) setIsMobile(false)
            else setIsMobile(true)
        })
    }, [user])

    if (user == null) return

    return(
        <MobileContextProvider>
            <section className="h-screen md:flex">
                <HeaderHome isMobile={isMobile}/>
                {isMobile ? <MainMobile /> : <MainHome/>}
                <FooterHome />
            </section>
        </MobileContextProvider>
    )
}

export default SectionHome