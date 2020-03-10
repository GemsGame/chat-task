import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomInput from '../components/CustomInput';
import { getMessages, sendMessages, getMessageHistory } from '../actions/messages';
import { getWebSocketAction} from '../service/websocket';
import { MessageList } from '../components/MessageList';

const Chat = ({
  authentication, messages, getMessages, sendMessages,getMessageHistory
}) => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value,
  });

  let store;

  useEffect(() => {
    getMessages(authentication.data.access_token);
    getWebSocketAction(
      authentication.data.room.id,
      authentication.data.access_token,
      getMessages
    );
   
  }, []);


  
  if (messages.length !== 0) {
    store = <MessageList messages={messages.data} />;
  }
  return (
   
    <div className="chat">
      <div className="chat__box">
        <div className="chat__title">
          Hello,
          <p className="chat__user-name">
            {authentication.data.user.name}
            ! 
          </p>
        </div>
        <div className="message-history-button" ><img src="../assets/icons8-update-left-rotation-50.png" title="message history" onClick={() => getMessageHistory(authentication.data.access_token, messages.current_page , messages.last_page)}></img></div>
        <div className="chat_text-area">
    
          {store}
        </div>
        
        <div className="chat__message">
          <CustomInput
            className="message-input"
            name="text"
            placeholder="Type your message here..."
            action={handleInputChange}
          />
          <img
            className="send-button"
            alt="send-button"
            src="../assets/send_button.svg"
            onClick={() => sendMessages(authentication.data.access_token, input)}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  messages: state.messages,
});

const mapDispatchToProp = {
  getMessages,
  sendMessages,
  getMessageHistory
};

export default connect(mapStateToProps, mapDispatchToProp)(Chat);
