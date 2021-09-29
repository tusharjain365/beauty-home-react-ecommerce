import styled from "styled-components";
import {FaCheckCircle, FaPlusCircle, FaMinusCircle, FaCircle} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState } from "react";
import {useCartContext} from '../contexts/cartContext';

const SingleProductCart = ({product})=>{
    const {addToCart} = useCartContext();
    const {id, stock , colors} = product;
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [items, setItems] = useState(1);

    const increase = ()=>{
        let t = items + 1;
        if(t > stock) {
            t = stock;
        }
        setItems(t);
    }

    const decrease = ()=>{
        let t = items - 1;
        if(t <= 0) {
            t = 1;
        }
        setItems(t);
    }
    return(
        <Container>
            <div className="names">
                <h4>Color:</h4>
                <div className="colors-btn">
                {colors.map((color, index)=>
                    <button key={index} style={{color: color}} onClick={() => setActiveColor(color)}>{ activeColor === color? <FaCheckCircle/>: <FaCircle/>}</button>
                )}
                </div>
            </div>
            <div className="cart-btn">
                <div className="btn-container">
                    <button onClick={decrease} className={items === 1 ? 'disable' : null}><FaMinusCircle/></button>
                    <h2>{items}</h2>
                    <button onClick={increase} className={items === stock ? 'disable' : null}><FaPlusCircle/></button>
                </div>
                <Link to="/cart" className="btn" onClick={()=> addToCart(id,activeColor,items, product)}>Add to Cart</Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    button {
        background :transparent;
        border:none;
        cursor:pointer;
        margin:0  .2rem;
    }
    .disable svg{
        cursor:not-allowed;
        opacity:.5;
    }
    
    h2 {
        margin-bottom:.3rem;
    }
    a {
        text-align:center;
        margin-top : 2rem;
    }
    .names{ 
        display:grid;
        grid-template-columns:100px 200px;
        svg {
            font-size:1.2rem;
        }
    }
    .colors-btn {
        display :flex;
    }
    .cart-btn {
        display:flex;
        flex-direction:column;
        width:30%;
    }
    .btn-container {
        display:flex;
        align-items:center;
        justify-content:space-between;
        svg {
            font-size:1.5rem;
            color:var(--clr-h);

        }

    }
    @media (min-width:992px) {
        a {
            margin-top:1rem;
        }
    }

`

export default SingleProductCart;