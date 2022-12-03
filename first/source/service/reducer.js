import { VALUE } from "./actiontype";
const INITIAL_STATE = { 
    username:"",
    password:"",
    color:"",
};
const update = (state=INITIAL_STATE, action ) =>{
    const payload = action.payload
    switch(action.type){
        case VALUE:
            return{...state,...payload};
        default:
            return state;
    }
}
export default update;
