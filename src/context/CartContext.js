import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";


const CartContext=createContext();

const getLocalCartData=()=>{
    const localData=localStorage.getItem("cartData");
    if(localData===null){
        return []
    }
    else{
        return JSON.parse(localData);
    }
}

console.log("now",getLocalCartData());


const initialState={
    cart:getLocalCartData(),
    total_items:"",
    total_value:"",
    shipping_fees:50000
}

const CartProvider=({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

    // to add the products in the cart
    const addToCart=(color,id,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{color,id,amount,product}})
    }

    // to remove the products in the cart
    const removeCartProduct=(id)=>{
        dispatch({type:"REMOVE_PRODUCT",payload:id})
    }

    // to clear the cart
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"});
    }

    // to increse the quantity in the cart
    function setIncrese(id){
        dispatch({type:"INCR_AMT",payload:id});
    }

    // to decrese the quantity in the cart
    function setDecrese(id){
        dispatch({type:"DECR_AMT",payload:id});
    }

    useEffect(()=>{
        dispatch({type:"UPDATE_TOTAL"})
     localStorage.setItem("cartData",JSON.stringify(state.cart));   
    //  console.log("now",getLocalCartData());
    },[state.cart]);

    return <CartContext.Provider value={{...state,addToCart,removeCartProduct,clearCart,setDecrese,setIncrese}}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext}