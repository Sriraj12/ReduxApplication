import { VALUE } from "./actiontype";
const INITIAL_STATE = [];
const update = (state=[...INITIAL_STATE], action ) =>{
    console.log("data",update);
    const payload = action.payload
    switch(action.type){
        case VALUE:
            return{...state,payload};
        default:
            return state;
    }
}
export default update;
