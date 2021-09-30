import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    // const total = cart.reduce((previous, product) => previous+product.price, 0);
    let totalQuantity=0
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total=total + product.price * product.quantity;
        totalQuantity =totalQuantity+product.quantity;
       
    }
    const shipping =total>0?15:0;   
    const tax =(total+shipping)*0.10;
    const grandtotal =(total+shipping+tax)
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Item orders:{totalQuantity}</h5>
            <br/>
            <p>total:{total.toFixed(2)}</p>
            <p>shipping:{shipping}</p>
            <p> tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{grandtotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;