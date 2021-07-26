import React,{useEffect,useState} from 'react';

import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { detailsProduct } from '../actions/productAction';
function Product({match,history}) {
    const [qty,setQty]=useState(1);
    const History = useHistory();
    const productDetails =useSelector(state=>state.productDetails)
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(detailsProduct(match.params.id));
        return ()=>{

        }
    },[])

    const handelAddToCart=()=>{
       history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
  
  const backToResult=()=>{
      History.goBack()
  }
  return (
      loading?<div>Loading...</div>:
      error?<div>{error}</div>:
    <div>
        <button className="back-btn" onClick={()=>backToResult()} >Back to result</button>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        {
                            product.name
                        }
                    </li>
                    <li>
                        {product.rating} Stars {product.numReviews}
                    </li>
                    <li>
                        Price: $<b>{product.price}</b>
                    </li>
                    Deccreiption: 
                    <div>
                        {product.discritption}
                    </div>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                          Price: $<b>{product.price}</b>
                    </li>
                    <li>
                                  Status: {product.countInStock>0?"In Stock":"Out Of Stock"}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                            {
                                [...Array(product.countInStock).keys()].map(ele=>(
                                    <option key={ele+1} value={ele+1}>{ele+1}</option>
                                ))
                            }
                        </select>
                    </li>
                    <li>
                    {
                      product.countInStock>0 && <button onClick={handelAddToCart} className="button primary">Add to Cart</button>
                     
                    }
                       
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Product;
