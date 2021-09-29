import styled from "styled-components";
import { useCartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

const CartCheckout = ()=>{
    const {totalAmount,  shippingAmount} = useCartContext();
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    return (
        <Container>
            <section>
                <div className="amounts">
                    <h4>Subtotal : <span>₹{totalAmount/10}</span></h4>
                    <p>Shipping Charges : <span>₹{shippingAmount/10}</span></p>
                </div>
                <hr />
                <h3>Total Amount: <span>₹{(totalAmount + shippingAmount)/10}</span>
                </h3>
            </section>
            {isAuthenticated ?<Link to="/checkout" className="btn">Checkout</Link> :<button className="btn login" onClick={loginWithRedirect}>Login</button> }
            
        </Container>
    )
}

const Container = styled.div`
    border-radius:var(--radius);
    width:25rem;
    margin:3rem 0;
    padding:2rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    box-shadow:0px 0px 10px black , 0px 0px 12px grey;
    h4 , p, h3{
        display:grid;
        grid-template-columns:200px auto;
    } 
    span {
        color:var(--clr-dark);
    }
    .amounts {
        display:grid;
        gap:.3rem;
        margin-bottom:.3rem;
    }
    h2 {
        margin-bottom:.3rem;
    }
    a,button{
        width:80%;
        text-align:center;
        margin-top:.5rem;

    }
    section {
        width:90%;
        padding:.2rem;
    }
    .login {
        padding:.56rem .75rem;
        border:transparent;
        cursor:pointer;
        font-size:1.1rem;

    }
    
`

export default CartCheckout;