import { Center } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { Product } from '@/features/top/types/product';

type Props = {
    posts: Product[];
};

const SSR = ({ posts }: Props): JSX.Element => {
    return (
        <>
            <Center>ssr</Center>
            {posts.map((post) => (
                <Center key={post.id}>{post.title}</Center>
            ))}
        </>
    );
};

export default SSR;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const API_URL_ROOT = 'https://fakestoreapi.com/products';
    // This is not working behind proxy.
    // await fetch(API_URL_ROOT);
    const res = await axios.get(API_URL_ROOT);
    const posts = res.data as Product[];
    console.log(posts);

    return {
        props: {
            posts,
        },
    };
};
