import styled from "styled-components";
import {Navigation} from '../components';
import about from '../images/about.jpg';

const About = ()=>{
    return(
        <div className="about">
           <Navigation title="About" />
            <Container className="page section section-center">
                <img src={about} alt="about img" />
                <article>
                    <div className="title">
                        About us
                    </div>
                    <p className="text">Beauty home is not just an online service, it is also a connection which is linking different people across the country. We started this mission in 2021 and try to fully satisfy our customers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque distinctio, vitae libero earum voluptatum officia dolorum totam, laboriosam harum facilis est possimus. Our main office is in Delhi</p>
                </article>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display:grid;
    grid-gap:2rem;
    img {
        width: 100%;
        display:block;
        border-radius :var(--radius);
        height:300px;
        object-fit:cover;
    }
    p{
        color:var(--clr-h-light);
        max-width : 45rem;
        margin:0 auto ;
        margin-top: 3rem;
        margin-bottom: 1.2rem;
    }
    @media (min-width: 992px) {
        grid-template-columns : 1fr 1fr;
    }
`

export default About;