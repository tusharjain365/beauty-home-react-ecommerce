import styled from "styled-components";
import {Link} from 'react-router-dom';

const Navigation = ({title, url})=>{
    return (
        <Container>
            <div className="section-center">
                <h2>
                    <Link to="/">Home</Link>
                    {url && <Link to="/products">/Products</Link> }
                    /{title}
                </h2>
            </div>
        </Container>
    )
}

const Container = styled.div`
box-shadow : 0px 2px 5px black, 0px 2px 5px grey;
width:100%;
min-height:15vh;
border-radius:var(--radius);
display:flex;
align-items:center;
text-transform : capitalize;
a {
    color:var(--clr-h-light);
    transition : var(--transition);
}
h3 {
    color : var(--clr-h);
}
a:hover {
    color: var(--clr-h);
}
`

export default Navigation;