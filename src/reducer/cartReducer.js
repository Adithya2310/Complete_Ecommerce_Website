

const cartReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const {id,product,color,amount}=action.payload;

            const existingProduct=state.cart.find((curElem)=>curElem.id===id+color);

            // to takle if the product already exists
            if(existingProduct){
                let updatedCart=state.cart.map((curElem)=>{
                    if(curElem.id===id+color){
                        curElem.amount+=amount;
                    }
                    if(curElem.amount>curElem.maxStock){
                        curElem.amount=curElem.maxStock;
                    }
                    return curElem;
                })
                return {...state,
                cart:updatedCart}
            }
            else{
                // getting the added product
            const Product={
                id:id+color,
                name:product.name,
                color:color,
                amount:amount,
                image:product.image[0].url,
                price:product.price,
                maxStock:product.stock
            }
            // console.log("now",action.payload);
            return {
                ...state,
                cart:[
                    ...state.cart,
                    Product
                ]
            }
            }

        case "REMOVE_PRODUCT":
            const passed_id=action.payload;
            let tempCart=state.cart;
            // to filter the product to be removed
            tempCart=tempCart.filter((curElem)=>{
                return curElem.id!==passed_id
            })
            return {
                ...state,
                cart:tempCart
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart:[]
            }

        case "INCR_AMT":
            let updatedCart=state.cart.map((curElem)=>{
                if(curElem.id===action.payload){
                    if(curElem.amount<curElem.maxStock){
                        return {
                            ...curElem,
                            amount:curElem.amount+1
                        }
                    }
                }
                return curElem;
            })
            return {
                ...state,
                cart: updatedCart
            }

            case "DECR_AMT":
            let newCart=state.cart.map((curElem)=>{
                if(curElem.id===action.payload){
                    if(curElem.amount>1){
                        return {
                            ...curElem,
                            amount:curElem.amount-1
                        }
                    }
                }
                return curElem;
            })
            return {
                ...state,
                cart: newCart
            }

            case "UPDATE_TOTAL":
                let total_value=state.cart.reduce((acc,curElem)=>acc+curElem.amount*curElem.price,0);
                let total_items=state.cart.reduce((acc,curElem)=>acc+curElem.amount,0);
                return {
                    ...state,
                    total_items:total_items,
                    total_value:total_value
                }
    
        default: return state
    }
  
}

export default cartReducer;