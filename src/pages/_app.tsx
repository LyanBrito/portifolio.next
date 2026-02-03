import type {AppProps} from 'next/app'
import Head from 'next/head'
import "../styles/main.scss"

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>LyanBrito`s Portfolio</title>
            </Head>

            <Component {...pageProps} />
        </>)
}
