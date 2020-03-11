import { api_host } from '../config/tokens.js';
import { store } from 'react-notifications-component';

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

export function registr(state) {
    return (dispatch) => {
      fetch(`http://${api_host}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(state),
  
      }).then((result) => result.json())
        .then((data) => {
         if(data.status === 'ok') {
            dispatch(registrSuccess(data));
            store.addNotification({
              title: data.status,
              message: 'registration success',
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
          dispatch(registrError(data));
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
  
        }
        )
    };
  
  }