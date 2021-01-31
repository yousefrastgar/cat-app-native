import {TOGGLE_SIDEBAR} from '../actions/sidebarActions';

const initialState = {isOpen: false};

const sidebarReducer = (state = initialState, action: any) => {
    if (action.type === TOGGLE_SIDEBAR)
        return {
            ...state,
            isOpen: !state.isOpen,
        };
    else
        return state;
}

export default sidebarReducer;
