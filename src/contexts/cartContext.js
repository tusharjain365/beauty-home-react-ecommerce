import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import {ADD_TO_CART, CAL_TOTAL_AMOUNT, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_AMOUNT} from '../actions';
import {useEffect} from 'react';

const CartContext = createContext();

const getProducts = () => {
    let items = localStorage.getItem('cartProducts')
    if (items) {
      return JSON.parse(localStorage.getItem('cartProducts'))
    } else {
      return []
    }
  }

const initialState={
    cartProducts:getProducts(),
    totalProducts:0,
    totalAmount:0,
    shippingAmount:599
};

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReducer , initialState);

    const addToCart = (id, color,items, product)=>{
        dispatch({type:ADD_TO_CART, payload:{id,color,items, product}});
    }

    const removeFromCart = (id)=>{
        dispatch({type:REMOVE_FROM_CART , payload:id});
    }

    const clearCart = ()=>{
        dispatch({type:CLEAR_CART});
    }
    const toggleAmount = (cid , type)=>{
        dispatch({type:TOGGLE_AMOUNT, payload:{cid, type}});
    }
    const calTotalAmount = ()=>{
        dispatch({type:CAL_TOTAL_AMOUNT});
    }

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        calTotalAmount();
    }, [state.cartProducts]);

    return(
        <CartContext.Provider value={{...state, addToCart, removeFromCart,clearCart,toggleAmount}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>{
    return useContext(CartContext);
}