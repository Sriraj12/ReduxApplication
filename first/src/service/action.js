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
    },5000)
}

 