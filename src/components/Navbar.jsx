import styled from "styled-components";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {links} from '../utils/constants';
import CartBtn from './CartBtn';
import {useProductContext} from '../contexts/productsContext';
import {useAuth0} from "@auth0/auth0-react";


const Navbar = ()=>{
    const {openSidebar} = useProductContext();
    const {isAuthenticated}  = useAuth0();
    return(
        <Container>
            <div className="main">
                <div className="header">
                    <Link to = "/">
                        <p>Beauty<span>Home</span></p>
                    </Link>
                    <button className="toggle" onClick={openSidebar}><FaBars/></button>
                </div>
                <ul className="links">
                    {links.map((link)=>{
                        const {id, text, url} = link;
                        return(
                            <li key={id}>
                                <Link to = {url}>{text}</Link>
                            </li>
                         )
                    })}
                    {isAuthenticated && (<li> <Link to="/checkout">Checkout</Link> </li>)}
                </ul>
                <CartBtn/>
            </div>
        </Container>
    )

}

const Container = styled.nav`
    height:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    .main{
        width:90vw;
        max-width:var(--max-width);
        margin:0 auto;
    }
    .header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:175px;
            margin-left:-15px;
        }
    }
    .toggle{
        background:transparent;
        border:transparent;
        cursor:pointer;
        color:var(--clr-dark);
        svg{
            font-size:2rem;
        }
    }
    .cart-btn-w{
        display:none;
    }
    .links{
        display:none;
    }
    p {
        span {
            color :var(--clr-dark);
            font-weight:bold;
            font-size:1.3rem;

        }
        fonts-size:1.2rem;
    }
    @media (min-width:992px) {
        .toggle{
            display:none;
        }
        .links{
            display:flex;
            justify-content:center;
            li {
                margin: 0 .7rem;
            }
            a{
                color : var(--clr-h);
                font-size:1.2rem;
                transition : var(--transition);
                padding:.3rem;
                border-radius: var(--radius);
                font-weight:bold;
                &:hover{
                    box-shadow : 0px 3px 7px black ,0px 6px 10px grey;
                }
            }
            
        }
        .main {
            display:grid;
            grid-template-columns : auto 1fr auto;
            align-items:center;
        }
        .cart-btn-w {
            display:grid;
        }
    }
`

export default Navbar;