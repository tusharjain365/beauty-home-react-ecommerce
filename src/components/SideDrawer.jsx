import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { links } from "../utils/constants";
import {Link} from 'react-router-dom';
import {useProductContext} from '../contexts/productsContext';
import CartBtn from "./CartBtn";
import {useAuth0} from '@auth0/auth0-react';

const SideDrawer = ()=>{
    const {isSidebarOpen , closeSidebar} =  useProductContext();    
    const {isAuthenticated} = useAuth0();
    return (
        <Container>
            <aside className={`${isSidebarOpen ? 'sidebar show ' :'sidebar' }`}>
               <div className="header">
                    <img src="" alt="logo" className="logo" />
                    <button className="close" onClick={closeSidebar}> <FaTimes/> </button>
               </div>
               <ul className="links">
                   {links.map((link)=>{
                       const {id, text, url} = link;
                       return (
                           <li key=  {id}>
                               <Link to={url} onClick={closeSidebar}>{text}</Link>
                           </li>
                       )
                   })}
                    {isAuthenticated && (<li>
                        <Link to="/checkout" onClick={closeSidebar}>Checkout</Link>
                    </li>)}
               </ul>
               <CartBtn/>
            </aside>
        </Container>
    )
}
const Container = styled.div`
.sidebar {
    position:fixed;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    transition : var(--transition);
    transform:translate(-100%);
    background : white;
    z-index:-1;
}
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 1.5rem;
}
.links a{
    display:block;
    padding:1rem 1.5rem;
    color:var(--clr-h);
    font-weight:bold;
    transition : var(--transition);
    &:hover{
        padding:1rem 2rem;
        border-radius:var(--radius );
        box-shadow :0px 3px 7px black , 0px 5px 5px grey;
    }
}
.close{
    border:transparent;
    background:transparent;
    font-size:2rem;
    color:var(--clr-dark);
    cursor:pointer;
}
.show{
    transform : translate(0);
    z-index:80;
}
.cart-btn-w {
    margin: 1rem auto;
}
`


export default SideDrawer;