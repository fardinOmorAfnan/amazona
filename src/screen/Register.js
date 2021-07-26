import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userAction';

function Register({ history, match ,location}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [password, setPassword] = useState("")
  const userRegister = useSelector(state => state.userRegister)
  const { loading, userInfo, error } = userRegister;
  const redirect=location.search?location.search.split("=")[1]:'/'
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo]);

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();

    if(password==rePassword){
      dispatch(register(name,email, password));
    }

  }
  return (
    <div className="form">
      <form action="">
        <ul className="form-container">
          <li>
            <h3 className="text-center">Create Account</h3>
          </li>
          <li>
            {loading && <div>Loading-------</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
          </li>
          <li>
            <label htmlFor="rePassword">Re type Password</label>
            <input type="password" name="rePassword" id="rePassword" onChange={(e) => setRePassword(e.target.value)}></input>
          </li>
          <li>
            <button onClick={(e) => submitHandler(e)} type="submit" className="button primary">Register</button>
          </li>
         <li>
           Already have an account? 
            <Link className="button secondary text-center" to={redirect === '/' ? `signin` : `signin?redirect=${redirect}`}>Sign In</Link>
         </li>
         
        </ul>
      </form>
    </div>
  );
}

export default Register;
