import type { AppProps } from 'next/app';
import MainTemplate from '../templates/MainTemplate';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainTemplate>
            <Component {...pageProps} />
        </MainTemplate>
    );
}
