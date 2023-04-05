

const productReducer = (state,action) => {
    const data=action.payload; 
  switch (action.type) {
    case "IS_LOADING":return {...state, isLoading:true}
    case "IS_ERROR":return {...state, isError:true}
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
    default: return state;
  }
}

export default productReducer