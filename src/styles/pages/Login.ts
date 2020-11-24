import styled from 'styled-components';

import { ButtonModel } from '../utils/Buttons';

export const Container = styled.div`
    display: grid;

    max-width: 60vw;
    margin: 8rem auto;

    grid-template-columns: 1fr 2fr;

    background-color: white;

    padding: 2rem;
    border-radius: .2rem;

    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.010);

    justify-content: center;
    text-align: center;


    form {
        display: flex;
        margin: 0 4rem;

        h2, input, select {
            margin-bottom: 2rem;
        }

        input {
            padding: 1rem;
            border-radius: .2rem;
            border: 1px solid black;

            transition: .2s;

            &:focus {
                transform: scale(1.04);
            }
        }

        label {
            text-align: start;
            margin: .6rem;

            span {
                color: gray;
            }
        }

        .react-select-container {
            margin-bottom: 2rem;
        }
        
        flex-direction: column;
    }
`;

export const LoginTilt = styled.div`

    display: flex;
    justify-content: center;
    
    width: 100%;
    height: 100%;

    transition: .2s;

    &:hover {
        transform: scale(1.02);
    }
`;

export const LoginButton = styled(ButtonModel).attrs({
    type: 'submit'
})`
    margin: auto;

    color: white;

    border-radius: .2rem;

    font-size: 1.5rem;

    &:hover {
        width: 17rem;
        background-color: rgb(40, 40, 40);
    }
`;

