import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePayment } from '../actions/addToCart';
import CheckOutSteps from '../component/CheckOutSteps';


function Payment(props) {
     const [paymentMethod,setPaymentMethod]=useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();


        dispatch(savePayment(paymentMethod))
        props.history.push('placeorder');

    }
  return (
    <div>
      <CheckOutSteps step1 step2 step3 ></CheckOutSteps>
          <div className="form">
              <form action="">
                  <ul className="form-container">
                      <li>
                          <h3 className="text-center">Payment</h3>
                      </li>

                      <li>
                          <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}></input>
                          <label htmlFor="paymentMethod">Paypal</label>
                          
                      </li>

                      

                      <li>
                          <button onClick={(e) => submitHandler(e)} type="submit" className="button primary">Continue</button>
                      </li>

                  </ul>
              </form>
          </div>
    </div>
  );
}

export default Payment;
