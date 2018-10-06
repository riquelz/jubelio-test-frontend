import { TOOGLE_LOADING, SET_PRODUCTS, SET_PRODUCT } from "./constant"
import { BASE_URL } from './../../../commons/constants/constant'
import {  push } from 'react-router-redux'
import axios from 'axios'

const dispatchLoading = ()=>{
    return {
        type: TOOGLE_LOADING
    }
}

export const getProducts = ()=>{
    return (dispatch)=>{
        dispatch(dispatchLoading())
        axios({
            method:'get',
            url: BASE_URL + 'products',
            responseType: 'json',
            timeout: 1000,
            headers: {
                'Access-Control-Allow-Origin': BASE_URL,
            },
        })
        .then(function (response) {
            dispatch(dispatchProducts(response.data.products))
            dispatch(dispatchLoading())
        })
        .catch(function (error) {
            console.log(error)
        })  
    }
}

const dispatchProducts = (products)=>{
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const getProduct = (id, onDone)=>{
    return (dispatch)=>{
        dispatch(dispatchLoading())
        axios({
            method:'get',
            url: BASE_URL + 'products/get/' + id,
            responseType: 'json',
            timeout: 1000,
            headers: {
                'Access-Control-Allow-Origin': BASE_URL,
            },
        })
        .then(function (response) {
            dispatch(dispatchProduct(response.data.product[0]))
            onDone()
            dispatch(dispatchLoading())
        })
        .catch(function (error) {
            console.log(error)
        })  
        
    }
}

const dispatchProduct = (product)=>{
    return {
        type: SET_PRODUCT,
        payload: product
    }
}

export const setProduct = (product)=>{
    return (dispatch)=>{
        dispatch(dispatchProduct(product))
    }
}

export const submitServer = (token,product,type,id='')=>{
    if(type === 'add'){
        return (dispatch)=>{
            axios({
                method:'post',
                url: BASE_URL + 'products',
                responseType: 'json',
                timeout: 1000,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin': BASE_URL,
                    'Authorization' : 'Bearer ' + token,
                },
                data: product
            })
            .then(function (response) {
                dispatch(push('/'))
                dispatch(dispatchLoading())
            })
            .catch(function (error) {
                console.log(error)
                dispatch(dispatchLoading())
            })
        }
    }else{
        return (dispatch)=>{
            axios({
                method:'put',
                url: BASE_URL + 'products/' + id,
                responseType: 'json',
                timeout: 1000,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin': BASE_URL,
                    'Authorization' : 'Bearer ' + token,
                },
                data: product
            })
            .then(function (response) {
                dispatch(push('/'))
                dispatch(dispatchLoading())
            })
            .catch(function (error) {
                console.log(error)
                dispatch(dispatchLoading())
            })
        }
    }
}

export const deleteProduct = (token, id)=>{
    return (dispatch)=>{
        dispatch(dispatchLoading())
        axios({
            method:'put',
            url: BASE_URL + 'products/delete/' + id,
            responseType: 'json',
            timeout: 1000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': BASE_URL,
                'Authorization' : 'Bearer ' + token,
            },
        })
        .then(function (response) {
            dispatch(getProducts())
            dispatch(dispatchLoading())
        })
        .catch(function (error) {
            console.log(error)
        })  
    }
}

export const deleteProductView = (token, id)=>{
    return (dispatch)=>{
        dispatch(dispatchLoading())
        axios({
            method:'put',
            url: BASE_URL + 'products/delete/' + id,
            responseType: 'json',
            timeout: 1000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': BASE_URL,
                'Authorization' : 'Bearer ' + token,
            },
        })
        .then(function (response) {
            dispatch(push('/'))
            dispatch(dispatchLoading())
        })
        .catch(function (error) {
            console.log(error)
        })  
    }
}