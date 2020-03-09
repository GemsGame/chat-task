import {api_host, room_id} from "../config/tokens.js";


export function getMessagesError(response) {
    return {
        type: "GET_MESSAGE_ERROR",
        payload: response
    };
}
export function getMessagesSuccess(response) {
    return {
        type: "GET_MESSAGE_SUCCESS",
        payload: response
    };
}

export function sendMessagesError(response) {
    return {
        type: "SEND_MESSAGE_ERROR",
        payload: response
    };
}
export function sendMessagesSuccess(response) {
    return {
        type: "SEND_MESSAGE_SUCCESS",
        payload: response
    };
}

export function getMessages(access_token) {

    return dispatch => {
      fetch(`http://${api_host}/api/rooms/${room_id}/messages`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${access_token}`
          },
    }).then(data => data.json()).then(result => dispatch(getMessagesSuccess(result)))
    .catch(error => dispatch(getMessagesError(error)));
    };

    
}

export function sendMessages(access_token, message) {
    return dispatch => {
      fetch(`http://${api_host}/api/rooms/${room_id}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${access_token}`
          },
          body: JSON.stringify(message)
    }).then(data => data.json()).then(result => dispatch(sendMessagesSuccess(result)))
    .catch(error => dispatch(sendMessagesError(error)));
    };

    
}


