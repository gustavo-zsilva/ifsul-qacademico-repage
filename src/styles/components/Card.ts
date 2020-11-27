import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: .2rem;

    border: 1px solid black;

    display: flex;

    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.10);

    margin-bottom: .6rem;

    cursor: pointer;
    transition: .2s;

    div:last-child {
        display: flex;
        flex-direction: column;

        margin-left: .8rem;

        max-width: 70%;
    }

    p {
        margin-bottom: .6rem;
    }

    span {
        font-size: 14px;
        line-height: 1.2rem;
    }

    &:hover {
        transform: scale(1.03);
    }

`;