'use client'
import { AuthContextProvider } from "@/context/AuthContext"
import SectionHome from "./components/home/Home"

const UserHome = () => {

    return(
        <AuthContextProvider>
            <SectionHome />
        </AuthContextProvider>
    )
}

export default UserHome