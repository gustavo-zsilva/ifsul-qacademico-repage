import styled from 'styled-components';

import { WarningProps } from '../../components/utils/Warning';

export const Container: WarningProps = styled.div`
    background-color: ${props => props.isRed ? "rgba(255, 0, 0, 0.507)" : "green"};
    max-width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: .2rem;
`;