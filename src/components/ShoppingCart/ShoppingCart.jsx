import { useEffect } from 'react';
import './ShoppingCart.css';
import Product from './Product';
import { createContext, useReducer } from 'react';
import Items from './Items';
import { reducer } from './reducer';
export const CartContext = createContext();

const initialState = {
    item : Product,
    totalItem : 0,
    totalAmount : 0,
};

const ShoppingCart = () => {
    const [state,dispatch] =  useReducer(reducer,initialState);
    // console.log({...state});
    const removeItem = (id) => {
        return dispatch({
            type:'REMOVE_ITEM',
            payload:id,
        })
    }

    const clearCart = () => {
        return dispatch({
            type:'CLEAR_CART',
            
        })
    }
    const increment = (id) => {
        return dispatch({
            type:'INCREMENT',
            payload:id,
        })
    }

    const decrement = (id) => {
        return dispatch({
            type:'DECREMENT',
            payload:id,
        })
    }

    useEffect(()=>{
        dispatch({
            type:'GET_TOTAL',
        })
        // console.log("hello");
    },[state.item]);

    useEffect(()=>{
        dispatch({
            type:'GET_TOTAL_AMOUNT',
        })
        // console.log("hello");
    },[state.item]);
    return(
        <>

                <div className="cart-container" >
                <h1 style={{color:'black'}}>Total {state.totalItem} items in the cart .</h1>
                <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
                    <Items/>
                </CartContext.Provider>
                </div>
           
        </>
    );
}

export default ShoppingCart;
// export  {CartContext}