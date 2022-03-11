import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;

    h1 {
        color : black;
    }

    p {
        color: black;
    }

    & > div,
    & > ul {
        flex: 1;
    }

 
    @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;
       text-align: center;
    }
`