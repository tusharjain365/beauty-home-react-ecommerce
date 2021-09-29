import { services } from "../utils/constants";
import styled from "styled-components";
import Service from "./Service";

const Services = () => {
    return (
        <Container>
            <div className="section-center">
                <h1>Our services</h1>
                <div className="services">
                    {services.map((service) => {
                        const { id, icon, title, content } = service;
                        return <Service key={id} icon={icon} title={title} content={content} />
                    })}
                </div>
            </div>

        </Container>
    )
}

const Container = styled.div`
    text-align:center;
    text-transform :capitalize;
    background : var(--clr-light-bc);
    h1 {
        padding:1.3rem;
    }
    .services {
        display:grid;
        grid-gap:1rem;
        padding:2rem 0;
    }
    .service {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding : 1.2rem 0;
        border-radius : var(--radius);
        transition : var(--transition);
        box-shadow : 0px 3px 5px black, 0px 5px 8px grey;
        h3 {
            color : var(--clr-dark-head);
        }
        .icon {
            font-size : 3rem;
        }
        .para {
            max-width:90%;
            text-align:center;
        }
    }
    .service:hover {
        margin-top : -1.2rem;
    }
    @media (min-width : 992px ) {
        .services {
            grid-template-columns : repeat(3, 1fr );
        }
        
        h1 {
            font-size : 2rem;
        }
    }
`

export default Services;