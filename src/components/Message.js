import React from "react";


export const Message = ({mainClass,headerClass, messageClass, header_text, message_text}) => {

    return(
        <div className={mainClass}>
            <div className={headerClass}>{header_text}</div>
            <div className={messageClass}>{message_text}</div>
        </div>
    )
}

