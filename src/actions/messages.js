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