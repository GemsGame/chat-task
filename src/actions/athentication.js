import { api_host } from '../config/tokens.js';
import { localStorageSet } from '../service/localStorage';
import { store } from 'react-notifications-component';

export function loginSuccess(response) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: response,
  };
}
export function loginError(response) {
  return {
    type: 'LOGIN_ERROR',
    payload: response,
  };
}

export function login(state) {
  return (dispatch) => {
    fetch(`http://${api_host}/api/auth/issue-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then((result) => result.json())
      .then((data) => {
        if (data.status === 'ok') {
          dispatch(loginSuccess(data));
          localStorageSet('authentication', data);
          store.addNotification({
            title: data.status,
            message: 'login success',
            type: "success",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              showIcon: true
            },
          });
        } else {
          dispatch(loginError(data));
          store.addNotification({
            title: data.message,
            message: Object.keys(data.errors).map((item, i) => data.errors[item][0]).toString(),
            type: "danger",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              showIcon: true
            },
          });
        }
      })





  };
}
