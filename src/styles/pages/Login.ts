import styled from 'styled-components';

import { ButtonModel } from '../utils/Buttons';


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


