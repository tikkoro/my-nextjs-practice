import { Center } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Product } from '@/features/top/types/product';

type Props = {
    posts: Product[];
};

const SSG = ({ posts }: Props): JSX.Element => {
    return (
        <>
            <Center>ssg</Center>
            {posts.map((post) => (
                <Center key={post.id}>{post.title}</Center>
            ))}
        </>
    );
};

export default SSG;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const API_URL_ROOT = 'https://fakestoreapi.com/products';
    const res = await axios.get(API_URL_ROOT);
    const posts = res.data as Product[];
    console.log(posts);

    return {
        props: {
            posts,
        },
    };
};
