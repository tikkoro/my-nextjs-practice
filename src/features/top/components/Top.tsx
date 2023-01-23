import { Suspense } from 'react';
import { Center, Spinner, VStack } from '@chakra-ui/react';
import ProductList from './ProductList';

const Top = (): JSX.Element => {
    return (
        <Center>
            <VStack>
                <Center>Top Page</Center>
                <Suspense
                    fallback={
                        <>
                            <Spinner color='teal' />
                            {/* prevent scrollbars from appering */}
                            <div />
                        </>
                    }
                >
                    <ProductList />
                </Suspense>
            </VStack>
        </Center>
    );
};

export default Top;
