import { SIGNIN_SUCCESS, SIGNIN_FAIL, VALUE } from "./actiontype";

export const signup = () =>{
    return{ type:SIGNIN_SUCCESS, payload:{signup}}

}
export const logout = () =>{
    return{ type:SIGNIN_FAIL, payload:{logout}}
}

export const pass = () =>{
    return{type:VALUE, payload:{pass}}
}

