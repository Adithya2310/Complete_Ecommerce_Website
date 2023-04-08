import { createContext,useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext=createContext();

const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[],
    is_SingleLoading:false,
    is_SingleError: false,
    singleProduct:{}
};

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    
    const getApi=async (url)=>{
        dispatch({type:"IS_LOADING"})
        try {
            const res=await axios.get(url);
            const products=res.data;
            dispatch({type:"SET_API_DATA",payload:products});
        }
        catch (error) {
            dispatch({type:"IS_ERROR"});
        }
    }

    const getSingleProduct=async (url)=>{
        dispatch({type:"SINGLE_LOADING"});
        try{
            const res=await axios.get(url);
            dispatch({type:"GET_SINGLE_PRODUCT",payload:res.data});
        }
        catch(error){
            dispatch({type:"SINGLE_ERROR"});
        }
    }


    useEffect(()=>{
        getApi(API);
    },[]);
    return (
        <AppContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
    );
}

// a hook to get the value passed to the AppContext
const useProviderValue=()=>{
    return useContext(AppContext);
};

export {AppProvider,useProviderValue};