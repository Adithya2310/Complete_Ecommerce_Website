import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";


const CartContext=createContext();

const getLocalCartData=()=>{
    const localData=localStorage.getItem("cartData");
    if(localData===[]){
        return []
    }
    else{
        return JSON.parse(localData);
    }
}


const initialState={
    cart:getLocalCartData(),
    total_items:"",
    total_amount:"",
    shipping_fees:""
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

    useEffect(()=>{
     localStorage.setItem("cartData",JSON.stringify(state.cart));   
    //  console.log("now",getLocalCartData());
    },[state.cart]);

    return <CartContext.Provider value={{...state,addToCart,removeCartProduct,clearCart}}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext}