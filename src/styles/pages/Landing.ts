import styled from 'styled-components';


export const Container = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4rem auto 3rem;
    grid-template-areas:
        'Header Header'
        'Main Hero'
        'Footer Footer';

    height: 100vh;
`;

export const Main = styled.main`
    display: flex;

    grid-area: Main;

    margin: 5rem 5rem 0 5rem;

    flex-direction: column;
    justify-content: space-between;

    div:first-child > div {
        display: flex;

        img {
            width: 4.5rem;
            margin-right: 1rem;
        }
    }

    span {
        font-size: 24px;
        color: #949494;

        .ifsul-logo {
            border-radius: 50%;
        }
    }
`;

export const Description = styled.div`
    margin: 3rem 0;
    font-size: 1.2rem;
    color: #5f6368;

    line-height: 1.6rem;
    max-width: 80%;
`;

export const Controllers = styled.div`
    display: flex;
    margin-bottom: 10rem;
    margin-top: 2rem;
`;

export const Title = styled.div`
    font-size: 3.5rem;
`;

export const Line = styled.div`
    background-color: gray;
    height: 1px;
    margin-top: 1rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.100);
`;

export const Footer = styled.footer`
    display: flex;

    grid-area: Footer;
    height: 100%;
   
    background-color: #0a0a0a;

`;