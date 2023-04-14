import React from 'react'
import CartAmountToggle from './CartAmountToggle'
import FormatPrice from '../Helper/FormatPrice'
import {FaTrash} from "react-icons/fa"

const CartItem = ({id,image,name,color,price,amount,removeCartProduct}) => {

    function setIncrese(){
        // amount<stock&&setAmount(amount+1);
    }
    function setDecrese(){
        // amount>1&&setAmount(amount-1);
    }
  return (
    <div className="cart_heading grid grid-five-column">
    {/* item section */}
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
            <div className="color-div"><p>Color:</p>
            <div className="color-style" style={{backgroundColor:color,color:color}}></div>
            </div>
        </div>
        </div>
        {/* price section */}
        <div className="cart-hide"><p><FormatPrice price={price/100}/></p></div>
        {/* quantity section */}
        <CartAmountToggle amount={amount} decrese={setDecrese} increse={setIncrese}/>
        {/* subtotal section */}
        <div className="cart-hide"><p><FormatPrice price={price*amount/100}/></p></div>
        {/* remove section */}
        <div>
            <FaTrash className="remove_icon" onClick={()=>{removeCartProduct(id)}}/>
        </div>
        
    </div>
  )
}

export default CartItem