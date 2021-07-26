import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import{Link} from 'react-router-dom'
import cookie from 'js-cookie'

function Profile({ history, match,location}) {
    const userSignIn =useSelector(state=>state.userSignIn);
    const {loading,userInfo,error}=userSignIn;

  const logOut = (e) => {
    e.preventDefault();
    cookie.remove("userInfo")
    
    history.push('/')
    window.location.reload();
  }

  return (
    <div>
      <Link className="show" onClick={(e) => logOut(e)}>Log out</Link>
    </div>
  );
}

export default Profile;


