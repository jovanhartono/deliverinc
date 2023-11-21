import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Deliverinc</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="preload" href="/fonts/inter-var-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                {/* eslint-disable-next-line @next/next/next-script-for-ga */}
                <script dangerouslySetInnerHTML={
                    {
                        __html:  `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4LBKC6L');`
                    }
                } />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
