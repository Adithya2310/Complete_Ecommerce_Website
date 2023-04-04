import { createContext,useContext, useEffect } from "react";
import axios from "axios";

const AppContext=createContext();

const AppProvider=({children})=>{
    const url="https://api.pujakaitem.com/api/products";
    const getApi=async ()=>{
        const res=await axios.get(url);
        const products=res.data;
        console.log("products",products);
    }
    useEffect(()=>{
        getApi();
    },[]);
    return (
        <AppContext.Provider value={{name:"Adithya"}}>
            {children}
        </AppContext.Provider>
    );
}

const useProviderValue=()=>{
    return useContext(AppContext)
};

export {AppProvider,useProviderValue};