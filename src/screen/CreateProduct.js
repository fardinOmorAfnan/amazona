import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveProduct ,listProducts,deleteProduct} from '../actions/productAction';

function CreateProduct({ history, match }) {
    const [modelVisible,setModelVisible] =useState(false)
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(0)
    const [numReviews, setNumReviews] = useState(0)
    const [image, setImage] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const productSave = useSelector(state => state.productSave)
    const productDelete = useSelector(state => state.productDelete)
    const productList = useSelector(state => state.productList)
    const { loading: loadignSave, success: successSave, error: errorSave } = productSave;
    const { loading: loadignDelete, success: successDelete, error: errorDelete } = productDelete;
    const { products, loadign, error } = productList;
    const dispatch =useDispatch()
    useEffect(() => {
        if(successSave){
            setModelVisible(false)
        }
       dispatch(listProducts())
        return()=>{

        }
    },[successSave,successDelete]);
const openModel =(product) =>{
    setModelVisible(true)
    setId(product._id)
    setName(product.name)
    setPrice(product.price)
    setBrand(product.brand)
    setCategory(product.category)
    setDescription(product.description)
    setImage(product.image )
    
    setCountInStock(product.countInStock)
}
    // const imageChangeHendeler = (e) => {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let tempFile;
    //     if (e.target.files[0]) {
    //         tempFile = e.target.files[0];
    //     } else {
    //         tempFile = this.state.file
    //     }

    //     reader.onloadend = () => {
    //         setImage(reader.result)
    //     }

    //     reader.readAsDataURL(tempFile)

    // }
    
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(saveProduct({_id:id,name,price,brand,category,description,rating,numReviews,image,countInStock}));

    }
    const deleteHandeler=(prodect)=>{
           dispatch(deleteProduct(prodect._id))
    }
    return (
      <>
            <div className="content content-margined">
                <div className="product-header">
                    <h3>Products</h3>
                    <button className="button primary" onClick={()=>openModel({})}>Create Product</button>
                </div>

            {
                    modelVisible && < div className="form">
                        <form action="">
                            <ul className="form-container">
                                <li>
                                    <h3 className="text-center">Add Product </h3>
                                </li>
                                <li>
                                    {loadignSave && <div>Loading-------</div>}
                                    {errorSave && <div>{errorSave}</div>}
                                </li>
                                <li>
                                    <label htmlFor="name">Name</label>
                                    <input value={name} type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                                </li>
                                <li>
                                    <label htmlFor="price">Price</label>
                                    <input value={price} type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)}></input>
                                </li>
                                <li>
                                    <label htmlFor="image">Image</label>
                                    <input value={image} type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}></input>
                                </li>
                                <li>
                                    <label htmlFor="brand">Brand</label>
                                    <input value={brand} type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}></input>
                                </li>
                                <li>
                                    <label htmlFor="category">Category</label>
                                    <input value={category}type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}></input>
                                </li>
                                <li>
                                    <label htmlFor="countInStock">Count In Stock</label>
                                    <input value={countInStock} type="text" name="countInStock" id="countInStock" onChange={(e) => setCountInStock(e.target.value)}></input>
                                </li>


                                <li>
                                    <label htmlFor="description">description</label>
                                    <textarea value={description} name="description" id="description" onChange={(e) => setDescription(e.target.value)}></textarea >
                                </li>
                                <li>
                                    <button onClick={(e) => submitHandler(e)} type="submit" className="button primary">{id?"Update":"Create Product"}</button>
                                </li>
                                <li>
                                    <button onClick={() =>setModelVisible(false)} type="button" className="button">Cancle</button>
                                </li>

                            </ul>
                        </form>
                    </div>
            }


                <div className="product-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(ele=>(
                                    <tr key={ele._id}>
                                        <td>{ele._id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.category}</td>
                                        <td>{ele.brand}</td>
                                        <td>
                                            <button onClick={()=>openModel(ele)}>Edit</button>
                                            {"  "}
                                            <button onClick={()=>deleteHandeler(ele)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                           
                        </tbody>
                    </table>
                </div>


           
                    
                    
             
            

           


            </div>

          </>
    );
}

export default CreateProduct;
