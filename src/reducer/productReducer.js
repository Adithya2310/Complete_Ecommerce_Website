

const productReducer = (state,action) => {
    const data=action.payload; 
  switch (action.type) {
    case "IS_LOADING":return {...state, isLoading:true}
    case "IS_ERROR":return {...state ,isLoading:false , isError:true}
    case "SET_API_DATA":{
        const featuredProducts=data.filter((x)=>{
            return x.featured;
        });
        return {
            ...state,
            isLoading:false,
            products:[...data],
            featuredProducts:[...featuredProducts]
        }
    }

    case "SINGLE_LOADING":return {...state,
    is_SingleLoading:true}

    case "SINGLE_ERROR": return {
        ...state,
        is_SingleLoading:false,
        is_SingleError:true
    }

    case "GET_SINGLE_PRODUCT":return {
        ...state,
        is_SingleLoading:false,
        singleProduct:data
    }
    default: return state;
  }
}

export default productReducer