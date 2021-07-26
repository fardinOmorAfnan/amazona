import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart,removeFromCart} from '../actions/addToCart'
function Cart({match,location,history}) {

  const productId =match.params.id;
  const qty=location.search? Number(location.search.split("=")[1]):1;
  const cart=useSelector(state=>state.cart)
  const {cartItems}=cart;
 const dispatch=useDispatch()

 const removeFromCartHandeler=(productId)=>{
    dispatch(removeFromCart(productId))
 }
 const checkOutHandeler=()=>{
    history.push("/signin?redirect=shipping")
 }
console.log(cartItems);
  useEffect(() =>{
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  },[])

  return (
    <div className="cart">
     <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>Shopping Cart</h3>
            <div>
              price
            </div>
        </li>
       
          {
            cartItems.length===0?
            <div>
              cart is empty
            </div>
            :
            cartItems.map(ele=>(
            
               <li>
                <div className="cart-image">
                  <img src={ele.image} alt="Product" />
                </div>
                <div className="cart-name">
                  <div>
                   <Link to={`/products/${ele.product}`}>
                      {ele.name}
                   </Link>
                  </div>
                  <div>
                    Qty:
                    <select value={ele.qty} onChange={(e) => dispatch(addToCart(ele.product, e.target.value))}>
                      {[...Array(ele.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button onClick={()=>removeFromCartHandeler(ele.product)}>Delete</button>
                  </div>
                </div>
                <div className="cart-price">
                  ${ele.price}
                </div>
               </li>
             
            ))
          }
        
      </ul>
     </div>
     <div className="cart-action">
          <h3>Subtotal ({
          cartItems.reduce((a, c) => a + Number(c.qty), 0)

            }) items 
          :
          $ {cartItems.reduce((a, c,) => a + c.price * c.qty, 0)}
          </h3>
        <button onClick={()=>checkOutHandeler()} disabled={cartItems.length===0} className="button primary full-width">Proceed to Checkout</button>
     </div>
    </div>
  );
}

export default Cart;
