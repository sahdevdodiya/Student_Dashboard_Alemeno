import { ERROR, LOADING, SUCCESS } from "./actionTypes"

export const successAction = (payload) => {
    return { type: SUCCESS, payload: payload }
}

export const errorAction = () => {
    return { type: ERROR }
}

export const loadingAction = () => {
    return { type: LOADING }
}