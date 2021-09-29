import styled from "styled-components";
import {FaShoppingCart,FaUserLock,FaUserSlash} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useProductContext} from '../contexts/productsContext';
import { useCartContext } from "../contexts/cartContext";
import {useAuth0} from '@auth0/auth0-react';

const CartBtn = ()=>{
    const {closeSidebar} = useProductContext();
    const {totalProducts} = useCartContext();

    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

    return(
        <Container className="cart-btn-w">
            <Link to= "/cart" className="cart" onClick={closeSidebar}>
                <span className="cart-btn">
                    <FaShoppingCart/>
                </span>
                <span className="cart-no">{totalProducts}</span>
            </Link>
            {!isAuthenticated ? <button className="auth" onClick={loginWithRedirect}>
                <FaUserLock/>
            </button> : 
            <button className="auth" onClick={()=>logout({returnTo:window.location.origin})}>
                <FaUserSlash/>
            </button>}
        </Container>
    )
}

const Container = styled.div`
display:grid;
grid-template-columns :1fr 1fr;
width:225px;
.cart{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    svg {
        height:2rem;
        margin-left : .5rem;
    }
    &:hover{
        transition:var(--transition);
        transform:scale(1.1);
    }
}
.cart-btn{
    font-size:1.5rem;
    color : var(--clr-dark);
    display:flex;
    align-items:center;
    cursor:pointer;
}
.cart-no {
    position:absolute;
    top:-1px ;
    right: 30px;
    height:16px;
    width:16px;
    border-radius:50%;
    background:var(--clr-light);
    color:white;
    font-size:.75rem ;
    display:flex;
    justify-content:center;
    align-items:center;
}
.auth {
    font-size:1.7rem;
    color:var(--clr-dark);
    display:flex;
    background:transparent;
    cursor:pointer;
    align-items:center;
    border:none;
    svg{ margin-left:5px; }
    &:hover{ transition:var(--transition);
        transform:scale(1.1);}

}
`

export default CartBtn;