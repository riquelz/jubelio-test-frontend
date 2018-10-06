import { START_AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, SET_AUTHENTICATION, SET_MESSAGE } from "./constant"

const initialState = {
    email : "",
    token : "",
    message : "",
    loading: false,
    isAuthenticate:false,
    isDirty:false
}

const handler = (currentState)=>{
    const startAuthentication = ()=>{
        return {...currentState,loading:true,isAuthenticate:false, isDirty:false}
    }
    const authenticationSuccess = ()=>{
        return {...currentState,loading:false,isAuthenticate:true, isDirty:true}
    }
    const authenticationFailed = ()=>{
        return {loading:false,isAuthenticate:false, isDirty:true, email: "", token: "", message: ""}
    }
    const setAuthentication = (payload)=>{
        return {...currentState,token:payload.token,email:payload.email}
    }
    const setMessage = (message)=>{
        return {...currentState,message:message}
    }
    return {startAuthentication,authenticationSuccess,authenticationFailed,setAuthentication,setMessage}
}

export default (state = initialState, action)=>{
    const {payload,type} = action
    switch(type){
        case START_AUTHENTICATION:
            return handler(state).startAuthentication()
        case AUTHENTICATION_SUCCESS:
            return handler(state).authenticationSuccess()
        case AUTHENTICATION_FAILED:
            return handler(state).authenticationFailed()
        case SET_AUTHENTICATION:
            return handler(state).setAuthentication(payload)
        case SET_MESSAGE:
            return handler(state).setMessage(payload)
        default :
            return state
    }
}