import {createContext, useContext, useEffect, useReducer} from 'react';
import productReducer from '../reducers/productReducer';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN, FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_SINGLE_PRODUCT_BEGIN, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_ERROR } from '../actions';
import { fetch_products} from '../utils/constants'; 
import axios from 'axios';

const ProductsContext = createContext();
const initialState = {
    isSidebarOpen:false,
    loadingProducts:false,
    errorProducts:false,
    products:[],
    featureProducts:[],
    loadingSingleProduct:false,
    errorSingleProduct:false,
    singleProduct:{},
};

export const ProductsProvider = ({children})=>{
    const [state, dispatch] = useReducer(productReducer, initialState);

    const openSidebar = ()=>{
        dispatch({type:SIDEBAR_OPEN,})
    }

    const closeSidebar = ()=>{
        dispatch({type:SIDEBAR_CLOSE,})
    }
    const fetchProducts = async (fetch_products)=>{
        dispatch({type : FETCH_PRODUCTS_BEGIN});
        try {
            const res = await axios.get(fetch_products);
            const {data} = res;
            dispatch({type : FETCH_PRODUCTS_SUCCESS, payload : data});
        } catch (error) {
            dispatch({type : FETCH_PRODUCTS_ERROR});
        }
    }
    const fetchSingleProduct = async (url)=>{
        dispatch({type:FETCH_SINGLE_PRODUCT_BEGIN});
        try {
            const res = await axios.get(url);
            const {data} = res;
            dispatch({type : FETCH_SINGLE_PRODUCT_SUCCESS, payload:data});
        } catch (error) {
            dispatch({type:FETCH_SINGLE_PRODUCT_ERROR})
        }
    }

    useEffect(()=>{
        fetchProducts(fetch_products);
    },[]);

    return(
        <ProductsContext.Provider value={{...state, openSidebar , closeSidebar, fetchSingleProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductContext = ()=>{
    return useContext(ProductsContext);
}