
import GlobalStyle from '../../styles/GlobalStyles';
import { Container, Content } from '../../styles/pages/Home';

import Header from '../../components/Header';
import Card from '../../components/Card';

interface HomeProps {
    data: Array<CardData>;
}

interface CardData {
    title: string;
    description: string;
    iconSrc: string;
    url: string;
}

const Home = ({ data }: HomeProps) => {

    return (
        <Container>
            <Header />

            <h3>Home</h3>

            <Content>
                
                {
                    data.map((card, index) => {
                        return(
                            <Card
                                key={index}
                                title={card.title}
                                iconSrc={card.iconSrc === 'default'
                                    ? 'https://www.flaticon.com/svg/static/icons/svg/1086/1086563.svg'
                                    : card.iconSrc}
                                url={card.url}
                            >
                                {card.description}
                            </Card>
                        )
                    })
                }

            </Content>

            <GlobalStyle />
        </Container>
    );
}

export async function getStaticProps(context) {
    const response = await import('../../card.json');
    const data = await JSON.parse(JSON.stringify(response.default));

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export default Home;