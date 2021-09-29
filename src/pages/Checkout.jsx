import styled from "styled-components";
import {Navigation, StripeCheckout, EmptyCart} from '../components';
import {Redirect} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import {useCartContext} from '../contexts/cartContext';

const Checkout = ()=>{
    const {isAuthenticated} = useAuth0();
    const {cartProducts} = useCartContext();

    if(!isAuthenticated) {
        return <Redirect to="/"/>
    }
    if(cartProducts.length < 1) {
        return(
            <Container className="full-page">
                <EmptyCart/>
            </Container>
        )
    }
    return(
        <div className="checkout">
            <Navigation title="Checkout" />
            <Container className="page">
            <StripeCheckout/>
            </Container>
        </div>
    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-ailgn:center;
`

export default Checkout;