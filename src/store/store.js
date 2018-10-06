import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createHistory from "history/createHashHistory"
import {routerReducer,routerMiddleware} from "react-router-redux"
import productReducer from '../components/product/store/reducer'
import authReducer from '../components/auth/store/reducer'

const persistConfig = {
    key: 'jubelio-test-frontend',
    storage,
}

const reducers = combineReducers(
    {
        product:productReducer,
        auth:authReducer,
        routing:routerReducer,
    }
)

const history = createHistory()
const middleware = routerMiddleware(history)
export {history}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer,applyMiddleware(thunk,middleware))

export const persistor = persistStore(store)