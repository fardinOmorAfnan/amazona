import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { listProducts } from '../actions/productAction';
function Home() {
    
  
    const productList=useSelector(state=>state.productList);
   
    const {products,loading,error}=productList;
    const dispatch=useDispatch()
    useEffect(() =>{
     dispatch(listProducts());
        return()=>{

        };
    },[])
  
  return (
       loading?<div>Loading.......</div>:
       error ? <div>{error}</div>:
      <div>
                  <ul className="products">

                      {
                          products.map((ele, ind) => (
                              <Link key={ind} to={'/products/' + ele._id}>
                                  <li>
                                      <div className="product">
                                          <img className="product-image" src={ele.image} alt="" ></img>
                                          <div className="product-name">
                                              <h4 >{ele.name}</h4>
                                          </div>
                                          <div className="product-brand">{ele.brand}</div>
                                          <div className="product-price">${ele.price}</div>

                                          <div className="product-rating">{ele.rating} stars ({ele.numReviews})</div>
                                      </div>
                                  </li>
                              </Link>
                          ))
                      }

                  </ul>
      </div>
  );
}

export default Home;
