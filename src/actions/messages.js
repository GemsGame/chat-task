import { api_host, room_id } from '../config/tokens';


export function getMessagesError(response) {
  return {
    type: 'GET_MESSAGE_ERROR',
    payload: response,
  };
}
export function getMessagesSuccess(response) {
  return {
    type: 'GET_MESSAGE_SUCCESS',
    payload: response,
  };
}
export function getMessagesHistorySuccess(response) {
  return {
    type: 'GET_MESSAGE_HISTORY_SUCCESS',
    payload: response,
  };
}

export function getMessagesHistoryError(response) {
  return {
    type: 'GET_MESSAGE_HISTORY_ERROR',
    payload: response,
  };
}

export function sendMessagesError(response) {
  return {
    type: 'SEND_MESSAGE_ERROR',
    payload: response,
  };
}
export function sendMessagesSuccess(response) {
  return {
    type: 'SEND_MESSAGE_SUCCESS',
    payload: response,
  };
}

export const getMessages = (access_token) => (dispatch) => {
  fetch(`http://${api_host}/api/rooms/${room_id}/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${access_token}`,
    },
  }).then((data) => data.json()).then(result => dispatch(getMessagesSuccess(result)))
    .catch((error) => dispatch(getMessagesError(error)));
};

export const sendMessages = (access_token, message) => (dispatch) => {
  fetch(`http://${api_host}/api/rooms/${room_id}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify(message),
  }).then((data) => data.json()).then((result) => dispatch(sendMessagesSuccess(result)))
    .catch((error) => dispatch(sendMessagesError(error)));
};

export const getMessageHistory = (access_token, current_page, last_page) => dispatch => {

  fetch(`http://${api_host}/api/rooms/${room_id}/messages?page=${current_page < last_page? current_page += 1: current_page += 0}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${access_token}`,
    },
  }).then((data) => data.json()).then(result => dispatch(getMessagesHistorySuccess(result)))
    .catch((error) => dispatch(getMessagesHistoryError(error)));
}
