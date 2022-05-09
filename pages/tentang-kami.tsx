import Head from "next/head";
import Image from "next/image";
import {NextPage} from "next";
import {ArrowRightIcon} from "@heroicons/react/outline";
import ContainerImage from '../public/images/background/container.webp';
import Link from "next/link";

const TentangKami: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tentang Kami - Deliverinc</title>
                <meta name="description"
                      content="Tentang Kami - Deliverinc Importir dan Forwarder China Indonesia Terpercaya"/>
            </Head>
            <main>
                <section>
                    <div
                        className={'relative flex text-gray-900'}>
                        <div className="container grid md:grid-cols-2 gap-12 py-12 md:py-24 mt-12">
                            <div className={'relative z-10 flex flex-col items-start space-y-6'}>
                                <div className="space-y-3">
                                    <h1 className={'!leading-[1.2] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight'}>
                                        Managing Business Payments has Never Been Easier.</h1>
                                    <p className={'text-base lg:text-lg text-gray-500 font-light tracking-tight max-w-prose'}>Kami
                                        terus
                                        berkomitmen untuk memberikan layanan impor yang cepat dan aman bagi Anda.
                                        Kenyamanan
                                        Anda adalah yang terutama bagi kami.</p>
                                </div>
                                <button className="shadow-md shadow-red-500/50 hover:shadow-yellow-500/50 cursor-pointer flex items-center bg-gradient-to-r to-rose-700 from-red-500 font-medium
                                                    hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-500 py-3 px-6
                                                    rounded text-white">
                                    <Link href={'/hubungi-kami'}>
                                        <a>Hubungi Kami</a>
                                    </Link>
                                    <ArrowRightIcon className={'inline-block h-4 w-4 ml-3'}/>
                                </button>
                            </div>
                            <div className="h-[350px] lg:h-[550px] relative rounded-lg overflow-hidden">
                                <Image src={ContainerImage} layout={"fill"} objectFit={"cover"} alt={'Deliverinc Container'}
                                       objectPosition={"bottom"}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative min-h-screen py-12 md:py-24 container">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 -mt-48">
                    </div>
                    {/*<h1 className="rose-clip-text text-5xl font-bold">Professional.</h1>*/}
                </section>
            </main>
        </>
    );
}

export default TentangKami;
