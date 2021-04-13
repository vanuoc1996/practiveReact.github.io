const initialState = {
    value: 0
}

// (state, action) => newState
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/incremented':
            return {
                ...state,
                value: state.value + 1
            };
        case 'counter/decremented':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}

export default counterReducer;

