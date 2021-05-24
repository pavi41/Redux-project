import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SetProduct } from '../redux/actions/Product'
import ProductComponent from './ProductComponent'


const ProductList = () => {
   
   
    const dispatch = useDispatch()
    

    const fetchProducts = async () => {
        const response = await axios.get('https://crud-prod-back.herokuapp.com/api')
        .catch((err) => {
            console.log('Err', err)
        })
        dispatch(SetProduct(response.data))
    }
    

    useEffect(() => {
        fetchProducts()
    }, [])

    

    return (
        <>
          <ProductComponent />
        </>
    )
}

export default ProductList
