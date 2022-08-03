import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Deliverinc</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="preload" href="/fonts/inter-var-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
