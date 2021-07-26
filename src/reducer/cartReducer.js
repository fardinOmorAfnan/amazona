import { CART_ADD_ITEM, CART_REMOVE_ITEM,CART_SAVE_SHIPPING,CART_SAVE_PAYMENT} from '../constant/cartConstant'
function cartReducer(state={cartItems:[],shipping:{},payment:{}},action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item=action.payload
            const product=state.cartItems.find(ele=>ele.product==item.product)
            if(product){
                return { cartItems:state.cartItems.map(ele => ele.product == product.product ? item : ele)}
            }
            return {cartItems:[...state.cartItems,item]}
        case CART_REMOVE_ITEM:
            return {cartItems:state.cartItems.filter(ele=>ele.product!=action.payload)}
        case CART_SAVE_SHIPPING:
            console.log("hello",action.payload);
            return {...state,shipping:action.payload}
        case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload }
        default:
            return state
    }
}

export {cartReducer}