import styled from "styled-components";
import {Link} from 'react-router-dom';

const Product = ({id, name , price, image})=>{
    return(
        <Container>
            <div className="product">
                <img src={image} alt={name} />
                <Link to={`/product/${id}`}>Explore</Link>
            </div>
            <div className="info">
                <h4>{name}</h4>
                <p>₹{price/10}</p>
            </div>
            
        </Container>
    )
}

const Container=styled.div`
    .product{
        position:relative;
        transition:var(--transition);
    }
    img {
        width:100%;
        display:block;
        object-fit:cover;
        border-radius:var(--radius);
    }
    a {
        color:white;
        border-radius :var(--radius);
        background :var(--clr-h);
        padding:.45rem .55rem;
        position:absolute;
        top:50%;
        right:50%;
        opacity:0;
        transition:var(--transition);
    }
    a:hover {
        background : var(--clr-h-light);
    }
    .info {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    h4{
        text-transform:capitalize;
        color:var(--clr-h);
    }
    .product:hover {
        img {
            opacity :.5;
        }
        a {
            opacity :1;
        }
    }

`

export default Product;