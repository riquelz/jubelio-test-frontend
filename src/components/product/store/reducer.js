import { TOOGLE_LOADING, SET_PRODUCTS, SET_PRODUCT } from "./constant"

const initialState = {
    products: [],
    product: null,
    loading: false,
    tempProducts:[],
}

const handler = (currentState)=>{
    const toogleLoading = ()=>{
        return {...currentState,loading:!currentState.loading}
    }
    const setProducts = (products)=>{
        return {...currentState,products:products,tempProducts:products}
    }
    const filterProducts = (products)=>{
        return {...currentState,products:products}
    }
    const getFirstLoadedProducts = ()=>{
        return {...currentState,products:currentState.tempProducts}
    }
    const setProduct = (product)=>{
        return {...currentState,product:product}
    }
    return {toogleLoading,setProducts,setProduct,filterProducts,getFirstLoadedProducts}
}

export default (state = initialState, action)=>{
    const {payload,type} = action
    switch(type){
        case TOOGLE_LOADING:
            return handler(state).toogleLoading()
        case SET_PRODUCTS:
            return handler(state).setProducts(payload)
        case SET_PRODUCT:
            return handler(state).setProduct(payload)
        default :
            return state
    }
}