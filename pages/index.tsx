import type {NextPage} from 'next'
import Image, {StaticImageData} from 'next/image';
import heroImage from '../public/images/heroimages.webp';
import DeliveredOrderImage from '../public/images/deliverinc-order-sampai.svg';
import ConsultationImage from '../public/images/deliverinc-konsultasi.svg';
import ConfirmationOrderImage from '../public/images/deliverinc-konfirmasi-order.svg';
import DeliveryImage from '../public/images/deliverinc-pengiriman.svg';
import {
    ArrowDownIcon, ChatIcon,
    CreditCardIcon,
    PaperAirplaneIcon,
    ThumbUpIcon
} from "@heroicons/react/outline";
import {ComponentProps, useRef, useState} from "react";
import RadialGradient from '../public/images/radial-gradient.svg';
import RadialGradient2 from '../public/images/radial-gradient-2.svg';
import Head from "next/head";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCard from "../components/swiper-card";
import {Customers} from "../const/customer";
import {Service, Services} from "../const/services";
import {Achievements} from "../const/achievements";

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element;

interface IconBox {
    icon: HeroIcon,
    title: string,
    isActive: boolean,
    details: string,
    image: StaticImageData
}

const Home: NextPage = () => {
    const scrollRef = useRef<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperCore>();

    const dataset: IconBox[] = [
        {
            icon: ChatIcon,
            title: 'Konsultasi',
            isActive: true,
            details: 'Konsultasi jika masih terdapat keraguan dan pertanyaan-pertanyaan seputar jasa impor kami. Tim kami akan menjelaskan dan mengarahkan kepada layanan yang cocok untuk Anda.',
            image: ConsultationImage
        },
        {
            icon: CreditCardIcon,
            title: 'Konfirmasi',
            isActive: false,
            details: 'Konfirmasi penyelesaian transaksi Anda dengan supplier dan dapatkan kode marking dari kami. Selanjutnya mintalah supplier untuk mengirimkan barang beserta invoice dan packing list ke gudang kami di China dengan kode marking yang telah kami berikan.',
            image: ConfirmationOrderImage
        },
        {
            icon: PaperAirplaneIcon,
            title: 'Kirim',
            isActive: false,
            details: 'Setelah melewati tahap pemeriksaan, kami akan mengirimkan barang sesuai dengan layanan yang Anda pilih. Saat barang Anda sampai di Indonesia kami dapat melakukan pengurusan Customs Clearance dan Tax Refund sesuai prosedur yang berlaku di China.',
            image: DeliveryImage
        },
        {
            icon: ThumbUpIcon,
            title: 'Sampai',
            isActive: false,
            details: 'Setelah barang Anda tiba di gudang kami di Jakarta, kami akan menghubungi anda terkait penagihan yang telah disepakati. Kemudian barang siap diantar ke lokasi Anda.',
            image: DeliveredOrderImage
        }
    ];

    const [iconBoxes, setIconBoxes] = useState<IconBox[]>(dataset);

    function scrollIntoView(): void {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    function setActiveIconBox(index: number): void {
        setIconBoxes((boxes: IconBox[]): IconBox[] => {
            const newBoxes = boxes.map((box: IconBox): IconBox => {
                box.isActive = false;
                return box;
            });
            newBoxes[index].isActive = true;
            setSelectedIndex(index);

            return newBoxes;
        });
    }

    return (
        <>
            <Head>
                <title>Home - Deliverinc</title>
                <meta name="description" content="Forwarder China-Indonesia Terpercaya"/>
            </Head>
            <main className={'scroll-smooth'}>
                <section className={'h-[550px] md:min-h-screen relative flex items-center justify-around'}>
                    <div className="z-10 container">
                        <div className={'w-full sm:w-2/3 lg:w-1/2 break-words space-y-6'}>
                            <div className="space-y-3">
                                <h1 className={'text-5xl md:text-6xl lg:text-7xl font-bold'}>Importir <br/> China-Indonesia
                                </h1>
                                <p className={'text-base tracking-tight font-normal md:font-light w-full'}>
                                    Telah berpengalaman melayani pelanggan setia selama 9 tahun dengan berbagai layanan
                                    solutif,
                                    mulai dari jasa pengiriman melalui laut dan udara hingga jasa pembelian dan transfer.
                                </p>
                            </div>
                            <button className="shadow-md shadow-red-500/50 hover:shadow-yellow-500/50 cursor-pointer inline-flex items-center bg-gradient-to-r to-rose-700 from-red-500 font-medium
                                                hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-500 py-3 px-6
                                                rounded" onClick={scrollIntoView}>
                                <span>Lebih Lanjut</span>
                                <ArrowDownIcon className={'inline-block h-4 w-4 ml-3'}/>
                            </button>
                        </div>
                    </div>
                    <Image alt="Deliverinc pengiriman" src={heroImage} layout={"fill"} objectFit={"cover"}/>
                </section>
                <section
                    className="scroll-mt-16 md:scroll-mt-24 container padding-section relative grid grid-cols-1 md:grid-cols-2 gap-12"
                    ref={scrollRef}>
                    <div className={'space-y-3 relative z-10 md:mt-6'}>
                        <h1 className={'heading-section text-gray-900'}>Alur
                            <span
                                className={'rose-clip-text'}> Transaksi</span>
                        </h1>
                        <p className={'description-section'}>
                            <span className={'text-red-500 font-medium'}>DeliverInc </span>
                            memprioritaskan kemudahan serta kecepatan dalam setiap transaksi.
                        </p>
                        <div className="inline-grid auto-cols-max gap-6 grid-flow-col relative">
                            {
                                iconBoxes.map((iconBox: IconBox, index: number) => {
                                    return (
                                        <div className="flex flex-col items-center space-y-1" key={index}
                                             onClick={() => {
                                                 setActiveIconBox(index);
                                                 swiper?.slideTo(index);
                                             }}>
                                            <div
                                                className={`${iconBox.isActive && 'bg-rose-500'} p-2 cursor-pointer rounded-lg transition-all duration-200`}>
                                                <iconBox.icon
                                                    className={`${iconBox.isActive ? 'text-gray-100' : 'text-rose-500'} w-8 h-8 cursor-pointer transition-all duration-200`}/>
                                            </div>
                                            <span
                                                className={`${iconBox.isActive ? 'text-rose-600' : 'text-gray-500'} text-xs md:text-sm transition-all duration-200`}>{iconBox.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <div
                            className={`shadow-lg shadow-pink-500/25 min-h-[475px] xl:min-h-[550px]
                            h-auto relative z-10 rounded-lg w-full xl:w-4/5`}>
                            <Swiper
                                slidesPerView={1}
                                autoplay={{
                                    delay: 5000,
                                    pauseOnMouseEnter: true,
                                    disableOnInteraction: false
                                }}
                                pagination={{
                                    dynamicBullets: true
                                }}
                                grabCursor={true}
                                className={'mySwiper h-full '}
                                onSwiper={(swiper: SwiperCore) => {
                                    setSwiper(swiper);
                                }}
                                onSlideChange={(swiper: SwiperCore) => {
                                    setActiveIconBox(swiper.realIndex);
                                }}
                                modules={[Pagination, Autoplay]}
                            >
                                {
                                    iconBoxes.map((iconBox: IconBox, index: number) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="rounded-lg overflow-hidden py-6">
                                                    <div className="relative w-full aspect-video">
                                                        <Image alt={iconBox.title} src={iconBox.image}
                                                               objectFit={"contain"} layout={"fill"}/>
                                                    </div>
                                                    <div className={'p-6 space-y-3'}>
                                                        <h1 className={'text-2xl md:text-3xl font-semibold text-rose-500 uppercase'}>{`0${index + 1}. ${iconBoxes[selectedIndex].title}`}</h1>
                                                        <p className={'description-card'}>{iconBoxes[selectedIndex].details}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div
                        className="absolute top-0 left-0 -right-1/2 md:right-0 md:-top-1/5 md:-left-1/4 max-w-full bottom-0">
                        <div className="relative h-full">
                            <Image src={RadialGradient} alt={'deliverinc radial background'} layout={"fill"}/>
                        </div>
                    </div>
                </section>
                <section className={'padding-section min-h-[75vh] bg-gradient-to-br from-pink-50 via-red-50 to-rose-50'}>
                    <div className="container grid grid-cols-1 gap-12">
                        <div className={'space-y-3 md:mt-6 relative z-10 text-left lg:text-center'}>
                            <h1 className={'heading-section text-gray-900'}>Layanan
                                <span
                                    className={'text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-pink-400'}> Kami</span>
                            </h1>
                            <p className={'description-section'}>
                                <span className={'text-red-500 font-medium'}> </span>
                                Kami menyediakan layanan <span
                                className={'text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-pink-400 font-medium'}>terbaik</span> dengan
                                harga yang kompetitif untuk semua kebutuhan bisnis anda.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {
                                Services.map((service: Service, index: number) => {
                                    return (
                                        <div key={index}
                                             className="group p-4 ring rounded-lg ring-gray-300 ring-1 shadow-md hover:shadow-amber-100 hover:ring-amber-500 space-y-4">
                                            <service.icon
                                                className={'h-12 w-12 text-rose-500 group-hover:text-amber-500 basic-transition'}/>
                                            <div className={'space-y-2'}>
                                                <h2 className={'text-gray-900 text-2xl font-semibold group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-b group-hover:from-amber-600 group-hover:to-yellow-400'}>{service.title}</h2>
                                                <p className={'group-hover:text-gray-600 text-sm description-card'}>{service.description}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
                <section
                    className="grid grid-cols-1 overflow-hidden md:grid-cols-2 padding-section container gap-12 relative">
                    <div className={'space-y-3 md:mt-6 relative z-10'}>
                        <span
                            className={'uppercase tracking-widest text-sm font-medium text-rose-500'}>testimonial</span>
                        <h1 className={'heading-section text-gray-900'}>Pelanggan
                            <span
                                className={'rose-clip-text'}> Kami</span>
                        </h1>
                        <p className={'description-section'}>
                            <span className={'text-red-500 font-medium'}>Deliverinc </span>
                            dipercaya oleh banyak kalangan masyarakat sebagai solusi kargo <span
                            className={'bg-gradient-to-b text-transparent bg-clip-text from-amber-600 to-yellow-400 font-medium'}>terbaik</span> untuk
                            kebutuhan bisnis.
                        </p>
                        <div className="pt-3 max-w-full">
                            <ul className={'space-x-6 flex'}>
                                {
                                    Achievements.map((item: { number: string, caption: string }, index: number) => {
                                        return (
                                            <li key={index}>
                                                <h2 className={'text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-b from-amber-600 to-yellow-300 bg-clip-text'}>{item.number}</h2>
                                                <p className={'text-gray-500 text-xs md:text-sm tracking-tight'}>{item.caption}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={'min-h-[350px] lg:min-h-[550px] flex'}>
                        <SwiperCard swiperData={Customers}/>
                    </div>
                    <div
                        className="absolute max-w-full -top-1/2 bottom-0 left-0 right-0 md:inset-0">
                        <div className="relative h-full">
                            <Image src={RadialGradient2} alt={'deliverinc radial background'} layout={"fill"}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
