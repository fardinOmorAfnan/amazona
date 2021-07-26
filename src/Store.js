import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import { productListReducer, productDetailsReducer, productSaveReducer,productDeleteReducer} from './reducer/ProducetReducer';
import {cartReducer} from './reducer/cartReducer'
import { userSignInReducer,userRegisterReducer} from './reducer/userReducers'
import thunk from 'redux-thunk'
import cookie from 'js-cookie'

const cartItems=cookie.getJSON('cartItems') || [];
const userInfo = cookie.getJSON('userInfo') || null;
const initialState={
    cart:{ cartItems,shipping:{},payment:{}},
    userSignIn: { userInfo}
};
const reducer=combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignIn: userSignInReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer,
    productDelete:productDeleteReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const store=createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;