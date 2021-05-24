import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteProduct } from '../redux/actions/Product'

const ProductComponent = () => {
    const products = useSelector((state) => state.Reducer.products.data)
    const dispatch = useDispatch()

    const renderList = products.map((elem) => {
        const {_id, image, price, name} = elem
        return (
            <div key= {_id}>
            <h3>{price}</h3>
            <h3>{name}</h3>
            <img src= {image} alt='' />
            <button type= 'submit' onClick= {() => dispatch(DeleteProduct(_id))}>Delete</button>
            </div>
        )
        
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent
