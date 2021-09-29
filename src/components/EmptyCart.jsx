import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyCart = ()=>{
    return(
        <Container>
            <h1>Your Cart is empty </h1>
            <Link to="/products" className="btn">Browse Products</Link>
        </Container>
    )
}
const Container = styled.div`
    text-align:center;
    h1 {
        margin-bottom:1.2rem;
    }
`

export default EmptyCart;