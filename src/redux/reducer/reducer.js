import { act } from "react-dom/test-utils"

let initialState ={
    count:0,
    id:"",
    password:""
}

function reducer(state=initialState,action){
 if(action.type === "INCREMENT"){
    return {...state,count:state.count+1}
 }else if(action.type === "FIVE INCREMENT"){
    return {...state,count:state.count+action.payload.num}
 }else if(action.type === "DECREMENT"){
    return{...state, count:state.count-1}
 }else if(action.type === "LOGIN"){
    return{...state, id:action.payload.id,password:action.payload.password}
 }else if(action.type === "RESET"){
    return {...state, count:action.payload.num}
 }
 return {...state}

//  switch(action.type){
//     case"INCREMENT":
//         return {...state,count:state.count+1}
//         break
//     case "FIVE INCREMENT":
//         return {...state, count:state.count+action.payload.num}
//         break
//     case "DECREMENT":
//         return {...state, count:state.count-1}
//         break
//     case "RESET":
//         return {...state, count:action.payload.num}
//         break
//     case"LOGIN":
//     return{...state, id:action.payload.id,password:action.payload.password}
//     default: return {...state}
//  }
}

export default reducer