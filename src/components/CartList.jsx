import styled from "styled-components";
import { FaMinusCircle, FaPlusCircle, FaTrash, FaCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";

const CartList = ({ id, name, price, image, color, items,maxItems }) => {
    const {removeFromCart, toggleAmount} = useCartContext();

    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    const increase = () => {
        toggleAmount(id, 'inc')
    }

    return (
        <Container className="section-center">
            <img src={image} alt={name} />
            <div className="info">
                <Link to={`/product/${id}`}><h3>{name}</h3></Link>
                <p>color: <FaCircle style={{color:color}}/></p>
                <p>₹{price / 10}</p>
            </div>
            <div className="toggle">
                <h4 className="subtotal">Subtotal: <span>₹{price*items/10}</span></h4>
                <div className="btn-container">
                <button onClick={decrease} className={items === 1 ? 'disabled' : null} ><FaMinusCircle /></button>
                <h2>{items}</h2>
                <button onClick={increase} className={items === maxItems ? 'disabled' : null}><FaPlusCircle /></button>
                </div>
            </div>
            <button className="btn remove" onClick={()=> removeFromCart(id)}><FaTrash/></button>
             
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    transition:var(--transition);
    
    a {
        color:var(--clr-h);
        &:hover {
            border-bottom:1px solid var(--clr-dark);
        }
    }
    button {
        background :transparent;
        border:none;
        cursor:pointer;
        margin:0  .2rem;
    }
    img {
        width:100%;
        display:block;
        object-fit:cover;
        height:200px;
    }
    .info{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    p {
        display:flex;
        width:70px;
        justify-content:space-between;
        align-items:center;
    }
    .subtotal {
        span {
            color:var(--clr-dark);
        }
    }
    .toggle {
        width:100%;
        display:grid;
        grid-template-columns:40% auto;
    }
    .btn-container {
        display:flex;
        justify-content:space-around;
        svg {
            font-size:1.2rem;
        }

    }
    .remove {
        align-self:flex-start;
        background:red;
        border:transparent;
        cursor:pointer;
        padding:.35rem .45rem;
    }
    .disabled {
        opacity:.7;
        cursor:not-allowed;
    }
    @media (min-width:800px){
        &:hover {
        border-bottom:1px solid var(--clr-h);
        }
        border-radius:var(--radius);
        flex-direction:row;
        img {
            width:50%;
        }
        .info{ 
            width:30%;
            align-items:center;
            flex-direction:column;
        }
        .remove{ 
            align-self:center;
        }
        .btn-container {
            justify-content:space-evenly;
            svg {
                font-size:1.5rem;
            }
        }
        .toggle {
            width:70%;
            grid-template-columns:100px auto;
            
        }
    }

`

export default CartList;