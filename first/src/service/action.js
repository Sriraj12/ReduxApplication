import { VALUE } from "./actiontype";
export const getPass = (user) =>(dispatch,getData)=>{
    dispatch({type:VALUE
    })
    const data = getData()
    console.log("storage",data);
    setTimeout(()=>{
        dispatch({
            type:VALUE,
            payload:user
        })
    },30000)
}

// export const getUpdate = (user) =>({
//         type:VALUE,
//         payload:user
// })


// export const pass = (user) =>{
//     return{
//             type:VALUE, 
//             payload:user
//           }
// }
// export const passValue = ({username,password})=>{

// }


 