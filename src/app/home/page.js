'use client'
import { AuthContextProvider } from "@/context/AuthContext"
import SectionHome from "./components/home/Home"
import { ChatContextProvider } from "@/context/chatContext"

const UserHome = () => {

    return(
        <AuthContextProvider>
            <ChatContextProvider>
                <SectionHome />
            </ChatContextProvider>
        </AuthContextProvider>
    )
}

export default UserHome