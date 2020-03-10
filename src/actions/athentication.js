import { api_host } from '../config/tokens.js';
import { localStorageSet } from '../service/localStorage';

export function registrSuccess(response) {
  return {
    type: 'REGISTRATION_SUCCESS',
    payload: response,
  };
}
export function registrError(response) {
  return {
    type: 'REGISTRATION_ERROR',
    payload: response,
  };
}

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

export function registr(state) {
  return (dispatch) => {
    fetch(`http://${api_host}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(state),

    }).then((result) => result.json()).then((data) => dispatch(registrSuccess(data)))
      .catch((error) => dispatch(registrError(error)));
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
      .then((data) => dispatch(loginSuccess(data)))
      .then((data) => localStorageSet('authentication', data.payload))
      .catch((error) => dispatch(loginError(error)));
  };
}
