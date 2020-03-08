import React from "react";
import { Message } from "./Message";



export const MessageList = ({ messages }) => {

    return (
        <>
            {messages.map((item, i) =>
                <Message key={i} messageClass="message__text" headerClass="message__user-name" mainClass="message__block" message_text={item.text} header_text={item.user.name} />
            )}
        </>
    )
}
