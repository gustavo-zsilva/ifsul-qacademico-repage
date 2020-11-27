import GlobalStyle from '../styles/GlobalStyles';
import { Container, Main, Title, Description, Line, Controllers, Footer } from '../styles/pages/Landing';
import { ArrowRightIcon, RegisterIcon } from '../styles/utils/Icons';
import { LoginButton, RegisterButton, } from '../styles/utils/Buttons';

import Header from '../components/Header';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => (
    <Container>

        <Head>
            <title>Q-Acadêmico Repage</title>
        </Head>

        <Header />

        {/* Main Part of the Landing page */}
        <Main>
            <div>
                <span>
                    <Image src="/assets/ifsul.jpg" width="50px" height="60px" className="ifsul-logo" alt="IFSul" />
                </span>

                <div>
                    <Image src="/assets/graduation-cap.svg" width="4.5rem" height="4.5rem" alt="Graduation Cap" />
                    <Title>Q-Acadêmico</Title>
                </div>

                <Description>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sunt repudiandae, ad iure est consectetur a temporibus inventore. Quis itaque praesentium rerum nihil veniam odio quisquam doloribus veritatis error labore?</p>
                </Description>

                <Line />
            </div>

            <Controllers>
                <Link href="/login">
                    <LoginButton>
                        Entrar
                        <ArrowRightIcon />
                    </LoginButton>
                </Link>
                
                <Link href="/register">
                    <RegisterButton>
                        Registrar
                        <RegisterIcon />
                    </RegisterButton>
                </Link>
            </Controllers>
        </Main>
        
        {/* Footer of the Landing page */}
        <Footer>

        </Footer>
        <GlobalStyle />
    </Container>
)

export default Index;