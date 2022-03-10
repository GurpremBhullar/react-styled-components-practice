import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
    border-bottom: 20px;
    border-radius: 20px;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.div`
    @media (max-width: ${({theme}) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

export const Image = styled.img`
     width: 300px;
     margin-left: 40px;
     height: 300px;

     @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 60px;
     }
`