import {combineReducers} from 'redux';
import {authentication} from "./authentication";
import {messages} from "./messages";
import {registration} from "./registration";
const rootReducer = combineReducers ({
    authentication,
    messages,
    registration
});

export default rootReducer;