import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import HeroBackground from '../public/images/background/contact.svg';
import WaimakaririBackground from '../public/images/Waimakariri.svg';
import {ArrowDownIcon} from "@heroicons/react/outline";
import {useRef} from "react";
import {LocationMarkerIcon, MailIcon, PhoneIcon} from "@heroicons/react/solid";

const HubungiKami: NextPage = () => {
    const scrollRef = useRef<null | HTMLElement>(null);

    return (
        <>
            <Head>
                <title>Hubungi Kami - Deliverinc</title>
                <meta name="description"
                      content="Hubungi Kami - Deliverinc Importir dan Forwarder China Indonesia Terpercaya"/>
            </Head>
            <main>
                <section className="padding-section">
                    <div className="container grid md:grid-cols-2 gap-12 pt-12">
                        <div className={'space-y-6'}>
                            <div className="space-y-3">
                                <h1 className={'heading-hero text-transparent bg-clip-text from-rose-600 to-pink-600 bg-gradient-to-b'}>
                                    Hubungi Kami. <br/>Dimanapun. <br/>Kapanpun.
                                </h1>
                                <p className={'description-section'}>Staff kami dengan senang hati membantu anda dengan
                                    pelayanan <span
                                        className={'amber-clip-text font-semibold'}>terbaik</span> untuk menjawab setiap
                                    pertanyaan serta kebutuhan anda.</p>
                            </div>
                            <button className="button flex items-center"
                                    onClick={() => scrollRef.current?.scrollIntoView({behavior: 'smooth'})}>
                                Lokasi Kami
                                <ArrowDownIcon className={'inline-block h-4 w-4 ml-3'}/>
                            </button>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]">
                            <Image src={HeroBackground} layout={'fill'} objectFit={"contain"} objectPosition={'top'}
                                   alt={'Deliverinc-hubungi-kami'}/>
                        </div>
                    </div>
                </section>
                <section className="relative md:padding-section scroll-mt-16 md:scroll-mt-24" ref={scrollRef}>
                    <div
                        className="container bg-gradient-to-br from-rose-600 to-pink-700 grid md:grid-cols-2 gap-12 relative z-10">
                        <div className={'pt-12 md:px-6 md:py-12 h-full flex flex-col'}>
                            <div className="space-y-3">
                                <h1 className="heading-section text-gray-100">Informasi Kontak</h1>
                                <p className="description-section text-gray-100">Hubungi kami melalui berbagai
                                    alternatif.</p>
                            </div>
                            <div className="mt-6">
                                <ul className={'space-y-3'}>
                                    <li>
                                        <a href={'mailto:deliverinc.id@gmail.com'} target={'_blank'}
                                           rel="noopener noreferrer">
                                            <div className={'flex space-x-3 items-center cursor-pointer'}>
                                                <MailIcon className={'w-6 h-6 text-white'}/>
                                                <span
                                                    className={'underline underline-offset-4'}>deliverinc.id@gmail.com</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'tel:081296209489'} target={'_blank'} rel="noopener noreferrer">
                                            <div className={'flex space-x-3 items-center cursor-pointer'}>
                                                <PhoneIcon className={'w-6 h-6 text-white'}/>
                                                <span
                                                    className={'underline underline-offset-4'}>+62 812-9620-9489</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'https://www.google.com/maps/dir//deliverinc/@-6.1721938,106.7155555,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69f1232b348385:0xbcb88b1ec3a2af86!2m2!1d106.7821273!2d-6.2212923'} target={'_blank'}
                                           rel="noopener noreferrer">
                                            <div className={'flex space-x-3 items-center cursor-pointer'}>
                                                <LocationMarkerIcon className={'w-6 h-6 text-white'}/>
                                                <span className={'underline underline-offset-4'}>Bellezza BSA 1st Floor Unit 106</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 md:mt-auto space-y-3">
                                <h2 className={'text-2xl lg:text-3xl font-semibold'}>Gudang</h2>
                                <div className="p-3 bg-white rounded-md space-y-2">
                                    <p className={'text-lg text-rose-600 font-semibold tracking-tight'}>GUANGZHOU</p>
                                    <span className={'description-card'}>广东省广州市白云区石井街道龙湖村 `隆鑫工业园` 1~10号</span>
                                </div>
                                <div className="p-3 bg-white rounded-sm space-y-2">
                                    <p className={'text-lg text-rose-600 font-semibold tracking-tight'}>YIWU</p>
                                    <span className={'description-card'}>浙江省义乌市西站大道889号义乌市铁路口岸二区6幢1楼20-22号门</span>
                                </div>
                            </div>
                        </div>
                        <div className="pb-12 md:pb-0">
                            <iframe
                                title={'deliverinc-map'}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3213248293355!2d106.77993861494737!3d-6.221292295496428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1232b348385%3A0xbcb88b1ec3a2af86!2sDeliverinc%20%7C%20PT%20DELIVERINC%20EKSPRESINDO%20SUKSES%20JAYA!5e0!3m2!1sen!2sid!4v1652503530469!5m2!1sen!2sid"
                                className={'w-full h-full aspect-square'} allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"/>
                        </div>
                    </div>
                    <Image className={'!hidden md:!block'} src={WaimakaririBackground} layout={"fill"} objectFit={'cover'} alt={'deliverinc-background-cover'}/>
                </section>
            </main>
        </>
    );
};

export default HubungiKami;
