import styled from "styled-components";
import Product from "./Product";

const GridView = ({products=[[]]})=>{
    return(
        <Container>
            <div className="grid">
                {products.map((product)=>{
                    return <Product key={product.id} {...product}/>
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    img {
        height : 175px;
    }
    .grid {
        display:grid;
        gap:2rem .75rem;
    }
    @media (min-width:600px){
        .grid {
            grid-template-columns:repeat(2, 1fr);
        }
    }
    @media (min-width:800px){
        .grid {
            grid-template-columns:repeat(3, 1fr);
        }
    }
`

export default GridView;