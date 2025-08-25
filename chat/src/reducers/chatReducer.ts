import type { Message } from "../types/Message";

type  AddAction = {
    type : 'add';
    payload: {
        user:string;
        text:string;
    }
}

type ChatActions = AddAction;

export const ChatReducer =(state: Message[], action : ChatActions) => {
    switch(action.type){
        case 'add':
            return[...state,{
                id: state.length,
                user: action.payload.user,
                text: action.payload.text
            }];
        default:
        return state;
    }

}