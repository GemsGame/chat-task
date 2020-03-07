export function messages(state = [], action) {
    switch (action.type) {
        case "GET_MESSAGE_SUCCESS":
            return action.payload;
        case "GET_MESSAGE_ERROR":
            return action.payload;
        case "MESSAGE_SEND_SUCCESS":
            return action.payload;
        case "MESSAGE_SEND_ERROR":
            return action.payload;
        default:
            return state;
    }
}