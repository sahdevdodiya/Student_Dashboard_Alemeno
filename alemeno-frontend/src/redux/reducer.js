import { ERROR, LOADING, SUCCESS } from "./actionTypes";

export const rootReducer = (state, { type, payload }) => {
    switch (type) {
        case SUCCESS:
            return { ...state, isLoading: false, isError: false, courses: payload }
        case ERROR:
            return { ...state, isLoading: false, isError: true }
        case LOADING:
            return { ...state, isLoading: true, isError: false }
        default:
            return state;
    }
}