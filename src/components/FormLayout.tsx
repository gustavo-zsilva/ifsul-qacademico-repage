import Tilt from 'react-tilt';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import GlobalStyle from '../styles/GlobalStyles';

import { Container, LoginTilt } from '../styles/components/FormLayout';
import { ArrowBackIcon } from '../styles/utils/Icons';

import Warning from './utils/Warning';

interface FormProps {
    pageTitle: string;
    children: object;
    heroSrc: string;
    warning?: boolean;
}

const FormLayout = ({ pageTitle, children, heroSrc, warning }: FormProps) => {

    const tiltOptions = {
        reverse: true,
        max: 35,
        glare: true,
        maxGlare: 1,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true
    }

    return (
        <Container>
            <Head>
                <title>Q-Acadêmico - {pageTitle}</title>
            </Head>

            <Link href="/">
                <ArrowBackIcon />
            </Link>

            <Tilt options={tiltOptions}>
                <LoginTilt>
                    <Image src={heroSrc} width="200px" height="auto" />
                </LoginTilt>
            </Tilt>
          
            <div>

                {warning && <Warning message="Preencha todos os campos para prosseguir." />}

                {children}
                
            </div>

            <GlobalStyle />
        </Container>
    );
}

export default FormLayout;

