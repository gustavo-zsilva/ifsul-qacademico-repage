import Head from 'next/head';

import Header from './Header';

import GlobalStyle from '../styles/GlobalStyles';
import { Container } from '../styles/components/HomeLayout';

interface HomeLayoutProps {
    pageTitle: string;
    children: any;
}

const HomeLayout = ({ pageTitle, children }: HomeLayoutProps) => {
    return (
        <Container>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            <Header />

            {children}

            <GlobalStyle />
        </Container>
    )
}

export default HomeLayout;