'use client'
import { useEffect, useState } from "react"
import FooterHome from "./footerHome"
import HeaderHome from "./headerHome"
import MainHome from "./mainHome"
import MainMobile from "./mainMobile"
import { FindUserLink } from "@/app/components/const/const"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

const SectionHome = () => {

    const [isMobile, setIsMobile] = useState(true)
    const [mainMobile, setMainMobile] = useState(FindUserLink)

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(()=> {
        if (user == null) {
            router.push("/")
            return
        }
        const destopkMediaQuery = window.matchMedia('(min-width: 768px)')

        setIsMobile(!destopkMediaQuery.matches)

        destopkMediaQuery.addEventListener('change', e => {
            if(e.matches){
                setIsMobile(false)
            }else{
                setIsMobile(true)
            }
        })
    }, [user])

    if (user == null) return

    return(
        <section className="h-screen md:flex">
            <HeaderHome isMobile={isMobile}/>
            {isMobile ? <MainMobile mainMobile={mainMobile} /> : <MainHome/>}
            <FooterHome setMainMobile={setMainMobile}/>
        </section>
    )
}

export default SectionHome