import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProviderValue } from './ProductContext';
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState={
    filtered_products :[],
    all_products :[],
    gridView: true,
    sortingOrder:"lowest",
    filter:{
        text:"",
        category:"All",
        company:"All",
        colors:"All",
        price: 0,
        maxPrice: 0,
        minPrice: 0
    }
}


// to export the data to the child==>App component

const FilterProvider=({ children })=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    const {products}=useProviderValue();
    console.log("prdoucts in context =>",products);

    // a function to set the grid view

    const setGridView=()=>{
        dispatch({type:"SET_GRID_VIEW"});
    }

    // a function to set list view

    const setListView=()=>{
        dispatch({type:"SET_LIST_VIEW"});
    }

    const sortingValue=(sortValue)=>{
        dispatch({type:"SET_SORTING_ORDER",payload:sortValue});
    }
    // a function to apply the specific filter 
    const filterValue=(event)=>{
        const {value,name}=event.target;
        dispatch({type:"FILTER",payload:{name,value}})
    }

    // a function to remove the filter

    const clearFilter=()=>{
        dispatch({type:"CLEAR_FILTER",payload:initialState.filter})
    }

    // to get the sorting order

    useEffect(()=>{
        dispatch({type:"ALL_PRODUCTS",payload:products});
    },[products])

    useEffect(()=>{
        dispatch({type:"SORT"})
    },[state.sortingOrder])

    useEffect(()=>{
        dispatch({type:"FILTER_SECTION"});
    },[state.filter]);


    return <FilterContext.Provider value={{...state,setGridView,setListView,sortingValue,filterValue,clearFilter}}>
        { children }
    </FilterContext.Provider>
}

const useFilterContext=()=>{
    return useContext(FilterContext);
}

export { FilterProvider,useFilterContext };