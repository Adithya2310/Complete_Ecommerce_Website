import React from 'react'
import {FaPlus,FaMinus} from "react-icons/fa";

const CartAmountToggle = ({amount,decrese,increse}) => {
  return (
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={decrese}><FaMinus/></button>
            <p className="amount-style">{amount}</p>
            <button onClick={increse}><FaPlus/></button>
        </div>
    </div>
  )
}

export default CartAmountToggle