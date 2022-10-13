import {  VALUE } from "./actiontype";
const INITIAL_STATE = 0
const update = (state=INITIAL_STATE, action ) =>{
    switch(action.type){
        case VALUE:
            return{...state,  };
        default:
            return state;
    }
}
export default update;



// const INITIAL_STATE ={signIn:false}
// const sign_in = (state=INITIAL_STATE,action)=>{
//     switch(action.type){
//         case SIGNIN_SUCCESS:
//             return {...state,signIn:true};
//         case SIGNIN_FAIL:
//             return state;
//         default:
//             return state;
//     }
// }
// export default sign_in;