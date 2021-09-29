import styled from 'styled-components';

const NewsLetter = ()=>{
    return(
        <Container>
            <div className="section-center">
                <h2>Subscribe to NewsLetter </h2>
                <div className="form">
                    <form action="https://formspree.io/f/xwkazknl" method="POST">
                        <input type="email" placeholder="Enter your email here ..." name="_replyto"/>
                        <button type="submit" className="btn" >Subscribe</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
text-align:center;
.form {
    margin : 1.2rem 0;
    display:grid;
    grid-gap : 2rem;
    padding : .75rem .25rem;
    input {
        padding : .75rem .25rem;
        border-radius : var(--radius);
        border:1px solid var(--clr-h-light);
        width : 400px;
        margin-right : 1.2rem;
    }
    button {
        border : transparent;
        margin-top : 1.2rem;
        width : 40vw;
        max-width : 40%;
        padding : .75rem 0;
        cursor:pointer;
    }
}
@media (min-width : 992px){ 
    .form {
        grid-template-columns : 1fr auto;
        grid-gap:2rem;
        button {
            width : 10rem;
        }
    }
}
`

export default NewsLetter;