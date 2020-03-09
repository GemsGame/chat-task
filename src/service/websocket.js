import Pusher from "pusher-js";
import {api_host, app_key} from "../config/tokens.js";

export const getWebSocketAction = (room_id, access_token, getMessagesFunction) => {

  var pusher = new Pusher(app_key, {
    authEndpoint: `http://${api_host}/broadcasting/auth`,
    wsPort: 6001,
    wsHost: api_host,
    httpHost: `http://${api_host}`,
    authTransport: 'ajax',

    auth: {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'X-CSRF-TOKEN': access_token
      }
    }
  });

  const channel = pusher.subscribe(`private-App.Room.${room_id}`, data => console.log(data));
    channel.bind("App\\Events\\NewMessageSent", data => {
      getMessagesFunction(access_token);
    })

  
}