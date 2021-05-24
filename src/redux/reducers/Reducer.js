import { ActionTypes } from "../contants/Action-types"

const initialState = {
    products: []
}
export const Reducer = (state = initialState, {type, payload, id}) => {
   switch(type) {
       case ActionTypes.SET_PRODUCTS: 
          return {...state, products: payload};

       case ActionTypes.DELETE_PRODUCT:
          const newList = state.products.filter((elem) => elem._id !== id)
           return {
              ...state,
              products: newList
           }   
       default: 
          return state;
   }
}