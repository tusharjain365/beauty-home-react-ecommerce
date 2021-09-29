import styled from "styled-components";
import {useCartContext} from '../contexts/cartContext';
import {CartList, EmptyCart,Navigation, CartCheckout} from '../components';
import {Link} from 'react-router-dom';

const Cart = ()=>{
    const {cartProducts, clearCart} = useCartContext();

    if(cartProducts.length < 1) {
        return (
            <Container className="full-page">
                <EmptyCart/>
            </Container>
        )
    }

    return(
        <div>
            <Navigation title="Cart"/>
            <Container className="page">
               <div className="section section-center cart">
                   {cartProducts.map((p)=>{
                      return <CartList key={p.id} {...p}/>
                   })}

                   <div className="action-btn">
                        <Link to="/products" className="btn">Back to Products</Link>
                        <button className="btn btn-clear" onClick={clearCart}>Clear Cart</button>
                   </div>
               <CartCheckout/>
               </div>
            </Container>
        </div>
    )
}

const Container = styled.div`
    .action-btn {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .cart {
        display:grid;
        gap:1rem;
    }
    button {
        padding:.56rem .43rem;
    }
    .btn-clear {
        background:red;
        border:none;
        cursor:pointer;
    }
`

export default Cart;