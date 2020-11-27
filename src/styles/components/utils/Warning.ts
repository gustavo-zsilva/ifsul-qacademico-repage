import styled from 'styled-components';

import { WarningProps } from '../../../components/utils/Warning';

export const Container = styled.div<WarningProps>`
    background-color: ${props => props.isRed ? "rgba(255, 0, 0, 0.507)" : "rgba(0, 255, 0, 0.507)"};
    color: ${props => props.isRed && "white"};
    max-width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: .2rem;

    animation: pop .5s backwards;
`;