import styled from "styled-components";
import {Navigation, ProductView} from '../components';
import { Filter, Sort } from "../components";

const Products = ()=>{
    return(
        <main>
            <Navigation title="Products"/>
            <Container className="page">
                <div className="section-center products">
                    <Filter/>
                    <div>
                        <Sort/>
                        <ProductView/>
                    </div>
                </div>
            </Container>
        </main>
    )
}

const Container = styled.div`
    .products {
        display:grid;
        grid-gap : 2rem;
        margin:2rem auto;
    }
    @media (min-width:800px) {
        .products {
            grid-template-columns:200px auto;
        }
    }

`

export default Products;