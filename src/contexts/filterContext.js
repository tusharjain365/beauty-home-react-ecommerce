import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import {useProductContext} from './productsContext';
import {APPLYSORT, APPLY_FILTERS, CLEAR_FILTERS, FILTER, GET_PRODUCTS, SET_GRID, SET_LIST, SORT} from '../actions';

const initialState = {
    filterProducts:[],
    allProducts:[],
    gridView: false,
    sort:'price-low',
    filters:{
        search:'',
        category:'all',
        company:'all',
        color:'all',
        minPrice:0,
        maxPrice:0,
        price:0,
        shipping:false
    }
};

const FilterContext = createContext();
export const FilterProvider = ({children})=>{
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const setGrid = ()=>{
        dispatch({type:SET_GRID});
    }
    const setList = ()=>{
        dispatch({type:SET_LIST});
    }
    const applySort = (e)=>{
        const {value} = e.target;
        dispatch({type:APPLYSORT, payload :value});
    }

    const applyFilters = (e)=>{
        let{name , value} = e.currentTarget;
        //target return what is actually clicked and in this case react icon is the one and it is not working
        //currentTarget returns on which parent element event is applied rather than the actual element that is clicked.
        if(name === 'color') {
            value = e.currentTarget.dataset.color;
        }
        if(name === 'price') {
            value = Number(value);
        }
        if(name === 'shipping') {
            value = e.currentTarget.checked;
        }
        dispatch({type:APPLY_FILTERS, payload:{name, value}});
    }

    const clearFilters = ()=>{
        dispatch({type:CLEAR_FILTERS});
    }

    useEffect(()=>{
        dispatch({type : GET_PRODUCTS, payload :products});
    },[products]);

    useEffect(()=>{
        dispatch({type:FILTER});
        dispatch({type:SORT});
    },[state.sort, products, state.filters]);

    return (
        <FilterContext.Provider value={{...state, setGrid, setList, applySort, applyFilters, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = ()=>{
    return useContext(FilterContext);
}