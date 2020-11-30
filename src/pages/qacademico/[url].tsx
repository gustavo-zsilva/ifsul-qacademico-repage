import { useRouter } from 'next/router';

import HomeLayout from '../../components/HomeLayout';

const Post = ({ currentPageObject }) => {
    const router = useRouter();
    const { url } = router.query;

    // console.log(currentPageObject);
    

    return (
        <HomeLayout pageTitle={`${url}`}>
            {/* {currentPageObject} */}
            <p>Page: {url}</p>
        </HomeLayout>
    );
}

// export async function getStaticPaths() {

// }

// export async function getStaticProps({ params }) {

    // const response = await import('../../card.json');
    // const data = await JSON.parse(JSON.stringify(response.default));

    // const currentPageObject = await data.filter(page => page.url === params.url);
    // console.log(data)

    // return {
    //     props: { currentPageObject },
    // }
// }

export default Post;