import { FindUserLink } from "@/app/components/const/const";
import { createContext, useContext, useState } from "react";

export const MobileContext = createContext({})

export const useMobileContext = () => {
    return useContext(MobileContext)
}

export const MobileContextProvider = ({ children }) => {
    
    const [mainMobile, setMainMobile] = useState(FindUserLink)

    return(
        <MobileContext.Provider value={{mainMobile, setMainMobile}}>
            {children}
        </MobileContext.Provider>
    )
}