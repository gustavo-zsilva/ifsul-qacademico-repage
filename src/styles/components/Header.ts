import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Header;

    display: flex;
    justify-content: space-between;

    padding: .8rem;
    margin: 0 1rem;

    border-bottom: 1px solid gray;

    img {
        cursor: pointer;

        transition: .2s;

        &:hover {
            /* background-color: rgba(128, 128, 128, 0.13); */
            /* transform: scale(1.01); */
        }
    }

    div:last-child {
        img {
            padding-right: 1rem;
        }
    }
`;
