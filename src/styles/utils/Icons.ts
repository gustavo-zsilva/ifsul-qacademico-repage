import styled from 'styled-components';

import { ArrowRight } from 'styled-icons/bootstrap';
import { UserPlus } from 'styled-icons/boxicons-regular';
import { Youtube } from 'styled-icons/feather';
import { FacebookBox } from 'styled-icons/remix-line';
import { ArrowBack } from 'styled-icons/boxicons-regular'

export const ArrowRightIcon = styled(ArrowRight)`
    width: 2.3rem;
    margin-left: .6rem;
`;

export const RegisterIcon = styled(UserPlus)`
    width: 2.3rem;
    margin-left: .6rem;
`;

export const ArrowBackIcon = styled(ArrowBack)`
    display: flex;
    width: 2.3rem;
    cursor: pointer;
    border-radius: 50%;

    transition: .2s;

    position: absolute;

    margin: 2rem;

    z-index: 1;

    &:hover {
        background-color: rgba(0, 0, 0, 0.060);
    }
`;