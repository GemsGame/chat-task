import React from "react";
import { Message } from "./Message";



export const MessageList = ({ messages, userID}) => {

    return (
        <>
            {messages.map((item, i) =>
                 
                 {if(item.user_id === userID) {
                return <Message key={i} 
                messageClass="message__text message__text_user" 
                headerClass="message__name message__name_user" 
                mainClass="message__block message__block_user" 
                message_text={item.text} header_text={item.user.name} />
                 } else {
                    return <Message key={i} 
                messageClass="message__text message__text_interlocutor" 
                headerClass="message__name message__name_interlocutor" 
                mainClass="message__block message__block_interlocutor" 
                message_text={item.text} header_text={item.user.name} />
                 }}
                
            )}
        </>
    )
}
