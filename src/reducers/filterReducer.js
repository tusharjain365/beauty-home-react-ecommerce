import { APPLYSORT, APPLY_FILTERS, CLEAR_FILTERS, FILTER, GET_PRODUCTS, SET_GRID, SET_LIST, SORT } from "../actions";


const filterReducer = (state, action)=>{
    switch (action.type) {

        case GET_PRODUCTS:
            let max = action.payload.map((product)=> product.price);
            max = Math.max(...max);
            return {...state, allProducts:[...action.payload], filterProducts:[...action.payload], filters:{...state.filters, maxPrice:max, price:max}}

        case SET_GRID:
            return {...state, gridView:true};
            
        case SET_LIST:
            return {...state, gridView:false}
        case APPLYSORT:
            return {...state, sort:action.payload};
        case SORT:
            const {sort, filterProducts} = state;
            let temp = [...filterProducts];
            if(sort === 'price-low') {
                temp.sort((a,b)=>{
                    if(a.price < b.price) {
                        return -1;
                    }
                    if(a.price > b.price) {
                        return 1;
                    }
                    return 0;
                })
            }
            if(sort === 'price-high') {
                temp.sort((a,b)=>{
                    if(a.price > b.price) {
                        return -1;
                    }
                    if(a.price < b.price) {
                        return 1;
                    }
                    return 0;
                })
            }
            if(sort === 'name-a') {
                temp.sort((a,b)=>{
                    return a.name.localeCompare(b.name);
                })
                  
            }
            if(sort === 'name-z') {
                temp.sort((a,b)=>{
                    return b.name.localeCompare(a.name);
                })

            }
            return {...state, filterProducts:temp};

        case APPLY_FILTERS:
            const {name, value} = action.payload;
            return{...state, filters:{...state.filters, [name]:value}};

        case CLEAR_FILTERS:
            return {...state,filters:{
                ...state.filters,
                search:'',
                category:'all',
                company:'all',
                color:'all',
                price:state.filters.maxPrice,
                shipping:false
            }}
        case FILTER:
            const {allProducts} = state;
            const {search , category, company, color, price, shipping} = state.filters;
            let tempProducts = [...allProducts];
            if(search) {
                tempProducts = tempProducts.filter((product)=> product.name.toLowerCase().includes(search));
            }
            if(category !== 'all') {
                tempProducts = tempProducts.filter((product)=> product.category.toLowerCase() === category);
            }
            if(company !== 'all') {
                tempProducts = tempProducts.filter((product)=> product.company.toLowerCase() === company);
            }
            if(color !== 'all') {
                tempProducts = tempProducts.filter((product)=> product.colors.includes(color));
            }
            tempProducts = tempProducts.filter((product)=> product.price <= price);
            if(shipping) {
                tempProducts = tempProducts.filter((product)=> product.shipping)
            }
            return {...state, filterProducts:tempProducts};
        
        default:
            return state;
    }
}

export default filterReducer;