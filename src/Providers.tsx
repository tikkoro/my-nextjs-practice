import type { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

const swrOptions = {
    suspense: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
};

const Providers = ({ children }: PropsWithChildren): JSX.Element => (
    <ChakraProvider>
        <SWRConfig value={swrOptions}>{children}</SWRConfig>
    </ChakraProvider>
);

export default Providers;
