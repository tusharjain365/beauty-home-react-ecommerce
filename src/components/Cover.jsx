import styled from "styled-components";
import {Link} from 'react-router-dom';
import cover from '../images/cover.jpg';

const Cover = ()=>{
    return(
        <Container className="section-center">
             <div className="left">
                 <h1>Your beautiful <span>Home</span></h1>
                 <p>Cutomizing home is a very important task. One always wants to customize his/her home for better environment and spirits. Things needed to customize your home to make it a beauty are avaliable here at affordable prices.</p>
                 <Link to= "/products" className="btn cover-btn"> Buy Now</Link>
             </div>

                <img src={cover} alt="Cover" />
        </Container>
    )
}

const Container=  styled.div`
    min-height : 60vh;
    display:grid;
    align-items:center ;
    text-align:center;
    grid-gap:2rem;
    img {
        display:none;
    }
    span {
        color : var(--clr-light);
    }
    p{
        line-height:1.5rem;
        margin: 1.5rem 0;
    }
    @media (min-width : 992px) {
        grid-template-columns :1fr 1fr;
        .cover-btn {
            font-size:1.1rem;
            padding:.4rem .75rem;
        }
        img {
            width: 100%;
            display:block;
            border-radius :var(--radius);
            height:300px;
            object-fit:cover;
        }
        h1 {
            font-size : 2rem;
        }
    }
`

export default Cover;