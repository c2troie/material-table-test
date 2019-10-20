import { createStore} from "redux"
import {GET_POSITION} from './actions';


const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const initialState = {
    pos: ''
}

const reducerPosition = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSITION:
            return {
                ...state,
                pos: action.payload
            };
        default:
            break;
    }
    console.log(action);
    return state;
}

export default createStore(reducerPosition,devtools)