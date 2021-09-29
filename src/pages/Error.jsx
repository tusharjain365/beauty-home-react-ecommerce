import styled from "styled-components";
import {Link} from 'react-router-dom';

const Error = ()=>{
    return(
        <Container className="full-page">
            <div>
                <h1>OOps !! </h1>
                <h3>This page is not present , Not to worry </h3>
                <Link to= "/" className="btn">Back Home</Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
background : rgb(243, 237, 237);
display:flex;
justify-content:center;
align-items:center;
text-align:center;
h1{
    font-size:3rem;
    color : var(--clr-h);
}
h3 {
    font-size : 1.6rem;
    color : var(--clr-h-light);
    margin-bottom:1.2rem;
}
`

export default Error;