import styled from "styled-components";
import { useProductContext } from "../contexts/productsContext";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

const FeaturedProducts = ()=>{
    const {loadingProducts, errorProducts,featureProducts } = useProductContext();
    if(loadingProducts) {
        return <Loading/>
    }
    if(errorProducts) {
        return <Error/>
    }
    return (
        <Container>
                <h1>Feature Products</h1>
            <div className="section-center feature">
                {featureProducts.slice(0,3).map((feature)=> <Product key={feature.id} {...feature}/>)}
            </div>
        </Container>
    )
}

const Container = styled.div`
    background : var(-clr-h-bc-light);
    text-align:center;
    margin-top : 1.5rem;
    margin-bottom : .5rem;
    padding:2rem 0;
    border-top : 1px solid var(--clr-light-bc);
    h1 {
        margin: 2rem 0;
    }
    .feature {
        display:grid;
        grid-gap:1rem;
        img {
            height :225px;
        }
    }
    @media (min-width: 700px) {
        .feature{
            grid-template-columns : 1fr 1fr 1fr;
        }

    }
`

export default FeaturedProducts;