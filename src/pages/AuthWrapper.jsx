import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';
import {Loading} from '../components';

const AuthWrapper = ({children})=>{
    const {isLoading, error} = useAuth0();
    if(isLoading) {
        return <Loading/>
    }

    if(error) {
        return <Container>
            <h1>{error.message}</h1>
        </Container>
    }

    return(
        <>
            {children}
        </>
    )
}

const Container = styled.div`
    min-height:100vh;
    display:grid;
    place-items:center;

`

export default AuthWrapper;