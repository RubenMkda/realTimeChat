import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/config";
import LoadingData from "@/app/components/LoadingData";

export const AuthContext = createContext({})

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }  else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe
    }, [user])

    return(
        <AuthContext.Provider value={{user}}>
            {loading ? <LoadingData isSeddingData={loading}/> : children}
        </AuthContext.Provider>
    )
}