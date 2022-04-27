import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Deliverinc</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            </Head>
            <div className="page-container">
                <Header/>
                <div className="container mx-auto px-4 md:px-8 lg:px-4">
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    );
}
