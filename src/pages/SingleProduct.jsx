import { useEffect} from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { Loading, SingleProductCart } from "../components";
import { useProductContext } from "../contexts/productsContext";
import {fetch_single_product} from '../utils/constants';
import { Navigation } from "../components";

const SingleProduct = ()=>{

    const {loadingSingleProduct,errorSingleProduct,singleProduct,fetchSingleProduct} = useProductContext();
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=>{
        fetchSingleProduct(`${fetch_single_product}${id}`);
        // eslint-disable-next-line
    },[id]);

    if(loadingSingleProduct) {
        return <Loading/>
    }
    if(errorSingleProduct) {
        setTimeout(()=>{
            history.push("/");
        },70);
    }
    let {name , price, description, stock, company, images} = singleProduct;
    if(images === undefined) {
        images = [{url : ""}];
    }

    return(
        <Container>
            <Navigation title={name} url={true}/>
            <div className="section-center section page">
               <div className="product">
                   <img src={images[0].url} alt={name} />
                   <section>
                       <h2>{name}</h2>
                       <h3>₹{price/10}</h3>
                       <p>{description}</p>
                       <section className="info">
                           <div className="names">
                               <h4>Available :</h4>
                               <h4>Company</h4>
                           </div>
                           <div className="values">
                               <h4>{stock ? 'In stock' : 'Out of stock'}</h4>
                               <h4>{company}</h4>
                           </div>
                       </section>
                           {stock > 0 && <SingleProductCart product={singleProduct} />}
                   </section>
               </div>

            </div>
        </Container>
    )
}

const Container = styled.div`
    
    .product {
        display : grid;
        grid-gap:1.2rem;
    }
    img {
        display:block;
        width:100%;
        object-fit:cover;
        height:420px;
    }
    h3{ 
        color:var(--clr-dark);
    }
    h4 {
        margin-bottom:.3rem;
    }
    section {
        padding:.75rem 0;
    }
    .info {
        display:flex;
        justify-content:flex-start;
        align-items:center;
    }
    .names{ 
        padding:.75rem 0;
        margin-right:1.2rem;
        
    }
    .values{ 
        color:var(--clr-h-light);
    }
    @media (min-width :992px) {
        .product {
            grid-template-columns:1fr 1fr;
        }
    }
`

export default SingleProduct;