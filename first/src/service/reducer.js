import { VALUE } from "./actiontype";
const INITIAL_STATE = { 
    username:"",
    password:"",
    color:"",
};
const update = (state=INITIAL_STATE, action ) =>{
    const payload = action.payload
    console.log("action",action);
    switch(action.type){
        case VALUE:
            return{...state,...payload};
        default:
            return state;
    }
}
export default update;
