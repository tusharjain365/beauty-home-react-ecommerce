import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({products})=>{    
    return(
        <Container>
            <div className="list">
                {products.map((product)=>{
                    const {id , name, price, description , image} = product;
                    return  (
                       <div key={id} className="list-item">
                           <img src={image} alt={name} />
                           <section className="desc">
                                <h3>{name}</h3>
                                <h4>₹{price/10}</h4>
                                <p>{description.substring(0,150)}...</p>
                                <Link to={`/product/${id}`} className="btn">Info</Link>
                           </section>
                       </div> 
                    )
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    .list {
        display:grid ;
        gap:.9rem ;
    }
    h4 {
        color:var(--clr-dark);
    }
    .list-item {
        display:grid;
        gap:.56rem .75rem;
    }
    img {
        width:100%;
        display:block;
        object-fit:cover;
        height:175px;
    }
    .desc {
        display:flex;
        justify-content:space-around;
        flex-direction:column ;
        align-items:baseline;
    }
    p {
        margin-bottom:2rem;
    }
    a {
        padding : .36rem 1rem;
    }
    @media (min-width:800px) {
        .list-item {
            grid-template-columns :300px auto;
        }
        img {
            height:150px;
        }
        p{
            margin-bottom:.75rem;
        }
    }
`

export default ListView;