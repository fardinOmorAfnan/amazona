import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveShipping } from '../actions/addToCart';
import CheckOutSteps from '../component/CheckOutSteps';

function Shipping(props) {
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")



  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();

  
      dispatch(saveShipping({address,city,postalCode,country}));
      props.history.push('payment');

  }
  return (
    <div>
      <CheckOutSteps step1 step2 ></CheckOutSteps>
      <div className="form">
        <form action="">
          <ul className="form-container">
            <li>
              <h3 className="text-center">Shipping</h3>
            </li>

            <li>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}></input>
            </li>

            <li>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}></input>
            </li>

            <li>
              <label htmlFor="postalCode">Postal Code</label>
              <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}></input>
            </li>

            <li>
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}></input>
            </li>

            <li>
              <button onClick={(e) => submitHandler(e)}type="submit" className="button primary">Continue</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
  );
}

export default Shipping;
