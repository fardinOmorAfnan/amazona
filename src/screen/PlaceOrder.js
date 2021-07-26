import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart,removeFromCart} from '../actions/addToCart'
import CheckOutSteps from '../component/CheckOutSteps'
function Cart({match,location,history}) {

  const cart=useSelector(state=>state.cart)
  const { cartItems, shipping,payment}=cart;
//  console.log(payment);
//  console.log("shipping",shipping);
 console.log("cart",cart);
  if(!shipping.address){
    history.push('/shipping')
  }else if (!payment) {
    console.log("hi");
    history.push('/payment')
  }
  const itemPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
  const shippingPrice=itemPrice> 100? 70:10;
  const taxPrice=0.15*itemPrice;
  const totalPrice=itemPrice+shippingPrice+taxPrice;
 const dispatch=useDispatch()

 const placeorderHendeler=()=>{
   //create an order
 }

 const checkOutHandeler=()=>{
    history.push("/signin?redirect=shipping")
 }

  useEffect(() =>{
  
  },[])

  return (
   <div>
     <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
      <div className="placeorder">
        <div className="placeorder-info">
          <div >
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address},{" "}
              {cart.shipping.city},{" "}
              {cart.shipping.postalCode},{" "}
              {cart.shipping.country}
            </div>
          </div>
          <div>
           <h3>Payment</h3>
           <div>
             Payment Method:{cart.payment}
           </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>
                  price
                </div>
              </li>

              {
                cartItems.length === 0 ?
                  <div>
                    cart is empty
                  </div>
                  :
                  cartItems.map((ele,ind)=> (

                    <li key={ind}>
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
                          Qty:{ele.qty}
                         
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
          
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <button onClick={() => placeorderHendeler()} className="button primary full-width">Place Order</button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${itemPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${taxPrice}</div>
            </li>
            <li>
              <div>Total Price</div>
              <div>${totalPrice}</div>
            </li>
          </ul>
         
          
        </div>
      </div>
   </div>
  );
}

export default Cart;
