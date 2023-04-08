
const filterReducer = (state,action) => {
    switch(action.type){
        case "ALL_PRODUCTS" : 
            // console.log("action payload inside a reducer=>",action.payload); 
            return {
            ...state,
            filtered_products:[...action.payload],
            all_products:[...action.payload]
        }
        case "SET_GRID_VIEW": return {
            ...state,
            gridView: true
        }
        case "SET_LIST_VIEW": return {
            ...state,
            gridView: false
        }
        case "SET_SORTING_ORDER":{
            const selected=document.getElementById("sort")
            const value=selected.value;
            console.log("selected value",value);
            return {
                ...state,
                sortingOrder:value
            }
        }
        case "SORT":{
            let tempData=state.filtered_products;
            let intialData=state.filtered_products;
            // for ascending order
            if(state.sortingOrder==="ascending"){
                tempData=intialData.sort((a,b)=>{
                    return a.name.localeCompare(b.name);
                })
            }
            // for decending order
            if(state.sortingOrder==="descending"){
                tempData=intialData.sort((a,b)=>{
                    return b.name.localeCompare(a.name);
                })
            }
            // for lowest first 
            if(state.sortingOrder==="lowest"){
                tempData=intialData.sort((a,b)=>{
                    return a.price-b.price;
                })
            }
            if(state.sortingOrder==="highest"){
                tempData=intialData.sort((a,b)=>{
                    return b.price-a.price;
                })
            }
            return {
                ...state,
                filtered_products:tempData
            }
        }
        default: return state
    }
}

export default filterReducer;