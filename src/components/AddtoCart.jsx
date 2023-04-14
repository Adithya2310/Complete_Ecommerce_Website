import styled from "styled-components";
import { useState } from "react";
import {FaCheck} from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button";
import { useCartContext } from "../context/CartContext";


const AddtoCart = ({product={"colors":0}}) => {
    const [selected,setSelected]=useState(0);
    const [amount,setAmount]=useState(1);

    // to access the methods of the cart context
    const {addToCart}=useCartContext();

    console.log(product);
    const {id,colors,stock}=product;
    console.log(colors);
    
    // to incresement and decrement operation

    function setIncrese(){
        amount<stock&&setAmount(amount+1);
    }
    function setDecrese(){
        amount>1&&setAmount(amount-1);
    }

  return (
    <Wrapper>
        {/* color selector */}
        <div className="colors">
            <p>Colors:{
            colors.map((curColor,index)=>{
                return (<button key={index} 
                                style={{backgroundColor:curColor}} 
                                className={(selected===index)?"btnStyle active":"btnStyle"}
                                onClick={()=>setSelected(index)}>
                    {(selected===index)&&<FaCheck className="checkStyle"/>}
                </button>);
            })}</p>
        </div>
        {/* to select the number of items you wanna purchase */}
        <CartAmountToggle amount={amount} decrese={setDecrese} increse={setIncrese}/>
        <NavLink to="/cart">
        <Button onClick={()=>{addToCart(colors[selected],id,amount,product)}}>
            Add To Cart
        </Button>
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddtoCart