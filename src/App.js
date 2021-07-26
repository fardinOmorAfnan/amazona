import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import data from './data'
import Home from './screen/Home'
import Product from './screen/Product'
import Cart from './screen/Cart'
import SignIn from './screen/SignIn'
import Register from './screen/Register';
import {useSelector,useDispatch} from 'react-redux'
import React,{useState,useEffect} from 'react'
import Profile from './screen/Profile';
import CreateProduct from './screen/CreateProduct';
import Shipping from './screen/Shipping';
import Payment from './screen/Payment';
import PlaceOrder from './screen/PlaceOrder'
import cookie from 'js-cookie'


function App() {
 
  
  const userSignIn=useSelector(state=>state.userSignIn);
  const {userInfo}=userSignIn;
 
 
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }

  // useEffect(() =>{
  //   return ()=>{

  //   }
  // },[userInfo])
  return (
   <BrowserRouter>
      <div className="app-main">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={() => openMenu()}>
                &#9776;
              </button>
              <Link to="/">amazona</Link>
              
            </div>
            <div className="header-links">
             
              <Link className="ancor" exact to="/cart">Cart</Link>
            
             {
                userInfo ? <Link className="ancor" to="/profile">{userInfo.name} </Link>:
                  <Link className="ancor" to="/signin">Sign In</Link>
              
             }
                  
             
            </div>
            
          </header>
         
          <aside className="sidebar">
            <h3>Shopong Catagory</h3>
            <button className="sidebar-close-btn" onClick={() => closeMenu()}>x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>
              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </aside>

          <main className="main">
            <div className="toltip">
             
            </div>
            <div className="content">
              <Route path="/profile" component={Profile}/>
              <Route path="/products" exact  component={CreateProduct}/>
              <Route path="/shipping" exact  component={Shipping}/>
              <Route path="/placeorder" exact  component={PlaceOrder}/>
              <Route path="/payment" exact  component={Payment}/>
              <Route path="/signin" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route path="/" exact component={Home} />
              
              <Route path="/products/:id" component={Product} />
              <Route path="/cart/:id?" component={Cart} />
               
            </div>
          </main>
          <footer className="footer">
            All right reserved
          </footer>
        </div>
      </div>
   </BrowserRouter>

  );
}

export default App;
