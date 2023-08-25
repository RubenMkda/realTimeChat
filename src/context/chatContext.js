import { createContext, useContext, useReducer } from "react";
import { useAuthContext } from "./AuthContext";
import { ChangeUserChat, ExitChat } from "@/app/components/const/const";

export const ChatContext = createContext({})

export const useChathContext = () => {
    return useContext(ChatContext)
}

export const ChatContextProvider = ({ children }) => {

    const { user } = useAuthContext()

    const INITIAL_STATE ={
        chatId: null,
        user: {}
    }
    
    const chatReducer = (state, action) => {
        switch (action.type) {
            case ChangeUserChat:
                return{
                    user: action.payload,
                    chatId:
                    user.uid > action.payload.uid
                        ? user.uid + action.payload.uid
                        : action.payload.uid + user.uid,
                }
            case ExitChat:
                return{
                    user: {},
                    chatId: null
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return(
        <ChatContext.Provider value={{data: state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}