import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userAction';

function SignIn({history,match,location}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const userSignIn=useSelector(state =>state.userSignIn)
    const {loading,userInfo,error}=userSignIn;
  
    const redirect=location.search? location.search.split('=')[1]:'/';

    useEffect(() =>{
        if(userInfo){
            console.log("redirect", redirect);
            history.push(redirect)
        }
    },[userInfo]);

    const dispatch =useDispatch()
    const submitHandler =(e)=>{
      e.preventDefault();
      
        dispatch(signin(email,password));

    }
  return (
    <div className="form">
        <form action="">
            <ul className="form-container">
                <li>
                    <h3 className="text-center">Sign In</h3>
                </li>
                <li>
                    {loading&& <div>Loading-------</div>}
                    {error&& <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) =>setEmail(e.target.value)}></input>
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" onChange={(e) =>setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button onClick={(e)=>submitHandler(e)} type="submit" className="button primary">Sign in</button>
                </li>
                <li>
                    New To Amazona?
                </li>
                <li>
                    <Link className="button secondary text-center" to={redirect==="/"?`register`:`register?redirect=${redirect}`}>Create Your Amazona Account</Link>
                </li>
            </ul>
        </form>
    </div>
  );
}

export default SignIn;
