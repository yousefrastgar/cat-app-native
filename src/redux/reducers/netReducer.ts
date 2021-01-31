import {SET_NETSTATE} from '../actions/netActions';

const initialState = {isConnected: true};

const netReducer = (state = initialState, action: any) => {
    if (action.type === SET_NETSTATE)
        return {
            ...state,
            isConnected: action.payload.state
        };
    else
        return state;
}

export default netReducer;
