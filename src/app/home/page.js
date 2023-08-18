'use client'
import { AuthContextProvider } from "@/context/AuthContext"
import SectionHome from "./components/home/sectionHome"

const UserHome = () => {

    return(
        <AuthContextProvider>
            <SectionHome />
        </AuthContextProvider>
    )
}

export default UserHome