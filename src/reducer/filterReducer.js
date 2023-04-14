
const filterReducer = (state,action) => {
    switch(action.type){
        case "ALL_PRODUCTS" :
            // to get the maximum price 
        const priceArray=action.payload.map((curElem)=>curElem.price);
        const maxPrice=Math.max(...priceArray);
        // console.log("now",maxPrice);
            // console.log("action payload inside a reducer=>",action.payload); 
            return {
            ...state,
            filtered_products:[...action.payload],
            all_products:[...action.payload],
            filter:{
                ...state.filter,
                price:maxPrice,
                maxPrice:maxPrice
            }
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
            // getting the value through javascript
            // const selected=document.getElementById("sort")
            // const value=selected.value;
            // console.log("selected value",value);

            // getting the value through the context api
            return {
                ...state,
                sortingOrder:action.payload
            }
        }
        case "SORT":{

            let tempData=state.filtered_products;
            let intialData=state.filtered_products;
            
            // a function to sort the values according the the option
            const sortValue=(a,b)=>{
                if(state.sortingOrder==="ascending")
                    return a.name.localeCompare(b.name);
                if(state.sortingOrder==="descending")
                    return b.name.localeCompare(a.name);
                if(state.sortingOrder==="lowest")
                    return a.price-b.price;
                if(state.sortingOrder==="highest")
                    return b.price-a.price;
            }
            
            // using the sort method and passing the above function 
            tempData=intialData.sort(sortValue)
            
            // if(state.sortingOrder==="ascending"){
            //     tempData=intialData.sort((a,b)=>{
            //         return a.name.localeCompare(b.name);
            //     })
            // }
            // // for decending order
            // if(state.sortingOrder==="descending"){
            //     tempData=intialData.sort((a,b)=>{
            //         return b.name.localeCompare(a.name);
            //     })
            // }
            // // for lowest first 
            // if(state.sortingOrder==="lowest"){
            //     tempData=intialData.sort((a,b)=>{
            //         return a.price-b.price;
            //     })
            // }
            // if(state.sortingOrder==="highest"){
            //     tempData=intialData.sort((a,b)=>{
            //         return b.price-a.price;
            //     })
            // }
            return {
                ...state,
                filtered_products:tempData
            }
        }

        case "FILTER":{
            const {name,value}=action.payload;
            return {...state,
            filter:{
                ...state.filter,
                [name]:value
            }}
        }
        case "FILTER_SECTION":{
            let tempData=state.all_products;
            let initialData=state.all_products;
            const {text,category,company,colors,price}=state.filter;

            if(text){
                tempData=initialData.filter((curElem)=>{
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if(category!=="All"){
                tempData=tempData.filter((curElem)=>{
                    return curElem.category===category
                })
            }
            if(company!=="All"){

                tempData=tempData.filter((curElem)=>{
                    return curElem.company===company
                })
            }
            if(colors!=="All"){
                tempData=tempData.filter((curElem)=>{
                    return curElem.colors.includes(colors)
                })
            }
            if(price){
                tempData=tempData.filter((curElem)=>curElem.price<=price)
            }
            return {
                ...state,
                filtered_products:tempData
            }
        }
        case "CLEAR_FILTER":
            const defaultFilterState=action.payload;
            // defaultFilterState.price=state.filter.maxPrice;
            // defaultFilterState.maxPrice=state.filter.maxPrice
            return {
                ...state,
                filter:{
                    ...defaultFilterState,
                    price:state.filter.maxPrice,
                    maxPrice:state.filter.maxPrice
                }
            }

        default: return state
    }
}

export default filterReducer;