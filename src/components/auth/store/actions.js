import {  push } from 'react-router-redux'
import { START_AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, SET_AUTHENTICATION, SET_MESSAGE } from './constant'
import { BASE_URL } from './../../../commons/constants/constant'
import axios from 'axios'

export const authenticate = (email,password)=>{
    return (dispatch)=>{
        dispatch(startAuthentication())
        axios({
            method:'post',
            url: BASE_URL + 'auth',
            responseType: 'json',
            timeout: 1000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': BASE_URL,
            },
            data: {
                email, 
                password
            }
        })
        .then(function (response) {
            dispatch(setAuthentication({email:response.data.scope,token:response.data.token}))
            dispatch(push('/'))
            dispatch(authenticationSuccess())
        })
        .catch(function (error) {
            console.log(error)
            dispatch(authenticationFailed())
        })  
    }
}

const startAuthentication = ()=>{
    return {
        type: START_AUTHENTICATION
    }
}

const authenticationSuccess = ()=>{
    return {
        type: AUTHENTICATION_SUCCESS
    }
}

const authenticationFailed = ()=>{
    return {
        type: AUTHENTICATION_FAILED
    }
}

const setAuthentication = (data)=>{
    return {
        type: SET_AUTHENTICATION,
        payload:data
    }
}

export const giveErrorMessage = ()=>{
    return (dispatch)=>{
        dispatch(setMessage("Please Login for further operations"))
        dispatch(push('/login'))
    }
}

const setMessage = (data)=>{
    return {
        type: SET_MESSAGE,
        payload:data
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        dispatch(authenticationFailed())
        dispatch(push('/login'))
    }
}