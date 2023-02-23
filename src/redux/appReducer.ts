import { SET_NAME } from "./actionsTypes"

const INITIAL_STATE = {
    name: ''
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.name }
        default:
            return state
    }
}

export default appReducer