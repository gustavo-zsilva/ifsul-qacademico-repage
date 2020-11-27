import styled from 'styled-components';

interface InputProps {
    disabled: boolean;
}

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

    position: relative;

    form {
        display: flex;
        flex-direction: column;
        margin: 0 4rem;

        h2, input, select {
            margin-bottom: 2rem;
        }

        input {
            padding: 1rem;
            border-radius: .2rem;
            border: 1px solid black;

            background-color: ${(props: InputProps) => props.disabled ? "gray" : "transparent"};

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
            display: block;

            .input-select {
                display: flex;
                height: 20px;
                justify-content: center;
                align-items: center;

                .input-select__single-value {
                    display: flex;
                    align-items: center;

                    span {
                        margin-left: .8rem;
                    }
                }
            }
        }
    }
`

export const LoginTilt = styled.div`

    display: flex;
    justify-content: center;
    margin: auto;
    
    width: 100%;
    height: 100%;

    transition: .2s;

    &:hover {
        transform: scale(1.02);
    }
`;