import { SET_NAME } from "./actionsTypes"

export const setName = (val: string) => {
    return {
        type: SET_NAME,
        name: val
    }
}