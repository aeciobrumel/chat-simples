import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Message } from "../types/Message";
import { ChatReducer } from "../reducers/chatReducer";

type ChatContext = {
    chat: Message[];
    addMessage: (user: string, tect: string) => void
}
export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [chat, dispatch] = useReducer(ChatReducer, []);

    const addMessage = (user: string, text: string) => {
        dispatch({
            type: 'add',
            payload: { user, text }
        });
    }
    return (
        <ChatContext.Provider value={{ chat, addMessage }}>{children}</ChatContext.Provider>
    );
}


export const useChat = () => useContext(ChatContext);