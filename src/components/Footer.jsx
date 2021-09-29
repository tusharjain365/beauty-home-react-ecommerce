import styled from "styled-components";

const Footer = ()=>{

    return(
        <Container>
            <h3>&copy; T&C Apply</h3>
            <p>2021</p>
        </Container>
    )
}

const Container = styled.div`
border-top:.11px solid var(--clr-dark);
height:5rem;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
color: white;
background : var(-clr-light-bc);
h3{
    margin-right:.3rem;
    color:var(--clr-h);
}
`

export default Footer;