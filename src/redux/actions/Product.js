import{ ActionTypes } from '../contants/Action-types' 
export const SetProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const DeleteProduct = (id) => {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        id
    }
}