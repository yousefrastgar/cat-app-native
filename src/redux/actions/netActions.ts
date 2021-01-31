export const SET_NETSTATE = 'SET_NETSTATE';

export const setNetState = (state: boolean) => ({
    type: SET_NETSTATE,
    payload: {state}
});
