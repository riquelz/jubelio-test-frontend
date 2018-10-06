import {  push } from 'react-router-redux'

export const navigate = (url) => {
    return (dispatch)=>{
        dispatch(push(url))
    }
  }