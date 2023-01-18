import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Providers from '@/Providers';

export const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Providers>
            <Component {...pageProps} />;
        </Providers>
    );
};

export default App;
