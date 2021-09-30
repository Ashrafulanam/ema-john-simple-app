import React, { useEffect, useState } from 'react';
import Product from '../../fakeData/Product/Product';
import Cart from '../Cart/Cart';
import {addToDb, getStoredCart}from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
   
        const[products, setProduct] =useState([]);
        const[cart,setCart]=useState([]);
        const [displayProduct,setDisplayProduct] = useState([]);
        
        useEffect(()=>{
         fetch('./products.JSON')  
         .then(response =>response.json())
         .then(data =>{
             setProduct(data)
             setDisplayProduct(data)  
         }
               ) 
         
        },[]);
        useEffect(()=>{
            if(products.length){
                const savedCart= getStoredCart()
                const storedCart=[];
            for(const key in savedCart) {
                
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
                
            } 
            setCart(storedCart);
            }
           
        },[products])
        
        const handleAddCart=(product)=>{
            console.log(product)
            const newCart = [...cart, product];
            setCart(newCart);
            addToDb(product.key)
        }
    // console.log(cart);
    const handleSearch =event =>{
        const searchText=(event.target.value);
        const matchedProducts =products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProducts);
        
    }
    return (
        <>
        <div className="search-container">
        <input type="text" placeholder="Search product" onChange={handleSearch} />
        </div>
        
        <div className='shop-container'>
            <div className='product-container'>
            <h3>Products:{products.length}</h3>
            {
                displayProduct.map(product => <Product key={product.key} product={product} handleAddCart={handleAddCart}></Product>)
            }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;