import { createContext,useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext=createContext();

const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[]
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


    useEffect(()=>{
        getApi(API);
    },[]);
    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
}

const useProviderValue=()=>{
    return useContext(AppContext);
};

export {AppProvider,useProviderValue};