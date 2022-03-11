import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 0 0;
    border-bottom: 20px;
    border-radius: 20px;

    h2 {
        text-align: center;
        text-decoration: bold;
    }

    h1 {
        color: 'white';
    }

    p {
        color: 'white';
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`


export const Image = styled.img`
     width: 400px;
     height: 400px;

     @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 60px;
     }
`