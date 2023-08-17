'use client'
import { useEffect, useState } from "react";
import FooterHome from "../components/home/footerHome";
import HeaderHome from "../components/home/headerHome";
import MainHome from "../components/home/mainHome";
import { FindUserLink } from "../const/const";
import MainMobile from "../components/home/mainMobile";

const UserHome = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [mainMobile, setMainMobile] = useState(FindUserLink)

    useEffect(()=> {
        const destopkMediaQuery = window.matchMedia('(min-width: 768px)')

        setIsMobile(!destopkMediaQuery.matches)

        destopkMediaQuery.addEventListener('change', e => {
            if(e.matches){
                setIsMobile(false)
            }else{
                setIsMobile(true)
            }
        })
    }, [isMobile])

    return(
        <section className="h-screen md:flex">
            <HeaderHome isMobile={isMobile}/>
            {isMobile ? <MainMobile mainMobile={mainMobile} /> : <MainHome/>}
            <FooterHome setMainMobile={setMainMobile}/>
        </section>
    )
}

export default UserHome