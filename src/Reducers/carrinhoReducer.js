import { useResolvedPath } from "react-router-dom"

export const carrinhoReducer = (state, action) => {
    switch (action.type){
        case "Adicionar Item": console.log(state);
            return [...state, action.payload]
        // case "Remover Item":
        //     return state.filter(item =>{
        //         return 
        //     })  
        default : return state
    } 
}