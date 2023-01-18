import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Providers from '@/Providers';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Providers>
            <Component {...pageProps} />;
        </Providers>
    );
};

export default App;
