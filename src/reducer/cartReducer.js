

const cartReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const {id,product,color,amount}=action.payload;
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
    
        default: return state
    }
  
}

export default cartReducer;