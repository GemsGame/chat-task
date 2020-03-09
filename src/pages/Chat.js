import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../components/CustomInput";
import { getMessages, sendMessages} from "../actions/messages"
import {getWebSocketAction} from "../service/websocket";
import { MessageList } from "../components/MessageList";


const Chat = ({ authentication, messages, getMessages, sendMessages }) => {
    const [input, setInput] = useState({});
    console.log(input);
    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });

    let store;
 
    useEffect(() => {
        getMessages(authentication.data.access_token);
        getWebSocketAction(authentication.data.room.id, authentication.data.access_token, getMessages);
    }, []);

    if (messages.length != 0) {
        store = <MessageList messages={messages.data} />;
    }
    return (
        <div className="chat">
            <div className="chat__box">
                <div className="chat__title">Hello, <p className="chat__user-name">{authentication.data.user.name}!</p></div>
                <div className="chat_text-area">{store}</div>
                <div className="chat__message"><CustomInput className="message-input" name="text" placeholder="Type your message here..." action={handleInputChange}/><img src="../assets/send_button.svg" onClick={() =>sendMessages(authentication.data.access_token, input)} /></div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        messages: state.messages
    };
};

const mapDispatchToProp = dispatch => {
    return {
        getMessages: access_token => dispatch(getMessages(access_token)),
        sendMessages: (access_token, message) => dispatch(sendMessages(access_token, message)),
        
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Chat);
 