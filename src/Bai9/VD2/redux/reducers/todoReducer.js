import { ADD_TODO } from "../actionTypes";

const initialState = {
    todos: []
}

// (state, action) => newState
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
}

export default todoReducer;

