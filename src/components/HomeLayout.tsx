import Head from 'next/head';

interface HomeLayoutProps {
    pageTitle: string;
    children: any;
}

const HomeLayout = ({ pageTitle, children }: HomeLayoutProps) => {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
        </div>
    )
}

export default HomeLayout;