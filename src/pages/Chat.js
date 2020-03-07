import React, {useEffect} from "react";
import {connect} from "react-redux";
import CustomInput from "../components/CustomInput";
import {getMessages} from "../actions/messages"

const Chat = ({authentication, getMessages}) => {


    useEffect(() => {
        
        getMessages(authentication.data.access_token);
    },[]);

    return(
       <div className="chat">
        <div className="chat__box">
            <div className="chat__title">Hello, <p className="chat__user-name">{authentication.data.user.name}</p></div>
            <div className="chat__message"><CustomInput className="message-input" name="message" placeholder="Type your message here..."/><img src="../assets/send_button.svg"/></div>
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
        getMessages: access_token => dispatch(getMessages(access_token))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProp
  )(Chat);
  