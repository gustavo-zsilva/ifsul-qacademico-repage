import styled from 'styled-components';

export const ButtonModel = styled.button`
    display: flex;
    width: 15rem;
    font-size: 1.8rem;
    justify-content: center;
    padding: 1rem;
    border: 0;

    cursor: pointer;
    transition: .2s;

    background-color: #119549;

    box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 0.020);
`;

export const LoginButton = styled(ButtonModel)`
 
    border-radius: .2rem;
    color: white;

    &:hover {
        width: 17rem;
        background-color: #10853e;
    }

    margin-right: 3rem;
`;

export const RegisterButton = styled(ButtonModel)`

    border-bottom: 2px solid #119549;
    background-color: transparent;

    &:hover {
        width: 17rem;
        border-bottom-color: #10853e;
    }

    box-shadow: 0px 10px 2px rgba(0, 0, 0, 0.020);
`;
