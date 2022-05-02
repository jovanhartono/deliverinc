import type {NextPage} from 'next'
import Image from 'next/image';
import heroImage from '../public/images/heroimages.webp';
import {
    ArrowDownIcon, ChatIcon,
    CreditCardIcon,
    PaperAirplaneIcon,
    ThumbUpIcon
} from "@heroicons/react/outline";
import {ComponentProps, useRef, useState} from "react";
import RadialGradient from '../public/images/radial-gradient.svg'
import Head from "next/head";

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element;

interface IconBox {
    icon: HeroIcon,
    title: string,
    isActive: boolean
}

const Home: NextPage = () => {
    const scrollRef = useRef(null);

    const dataset: IconBox[] = [
        {
            icon: ChatIcon,
            title: 'Konsultasi',
            isActive: false
        },
        {
            icon: CreditCardIcon,
            title: 'Konfirmasi',
            isActive: false
        },
        {
            icon: PaperAirplaneIcon,
            title: 'Kirim',
            isActive: false
        },
        {
            icon: ThumbUpIcon,
            title: 'Sampai',
            isActive: false
        }
    ];

    const [iconBoxes, setIconBoxes] = useState<IconBox[]>(dataset);

    function scrollIntoView(): void {
        // @ts-ignore
        scrollRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Head>
                <title>Home - Deliverinc</title>
                <meta name="description" content="Forwarder China-Indonesia Terpercaya"/>
            </Head>
            <main className={'scroll-smooth'}>
                <div className={'h-[650px] md:min-h-screen relative -mt-24 flex items-center justify-around'}>
                    <div className="z-10 container">
                        <div className={'w-full md:w-1/2 break-words space-y-4'}>
                            <h1 className={'text-5xl md:text-6xl lg:text-7xl font-bold'}>Importir <br/> China-Indonesia
                            </h1>
                            <p className={'text-sm md:text-base font-light w-full'}>
                                Telah berpengalaman melayani pelanggan setia selama 9 tahun dengan berbagai layanan
                                solutif,
                                mulai dari jasa pengiriman melalui laut dan udara hingga jasa pembelian dan transfer.
                            </p>
                            <a className="cursor-pointer inline-flex items-center bg-gradient-to-r to-rose-700 from-red-500 font-medium
                                                hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-500 py-3 px-6
                                                rounded" onClick={scrollIntoView}>
                                <span>Lebih Lanjut</span>
                                <ArrowDownIcon className={'inline-block h-4 w-4 ml-3'}/>
                            </a>
                        </div>
                    </div>
                    <Image alt="Deliverinc pengiriman" src={heroImage} layout={"fill"} objectFit={"cover"}/>
                </div>
                <div className="min-h-screen scroll-mt-48 container mt-24 relative" ref={scrollRef}>
                    <div className={'w-full md:w-1/2 space-y-3 relative z-10'}>
                        <h1 className={'text-5xl font-bold text-gray-900'}>Alur
                            <span
                                className={'text-transparent bg-gradient-to-b from-rose-500 to-red-500 bg-clip-text'}> Transaksi</span>
                        </h1>
                        <p className={'text-lg text-gray-500 tracking-tight font-light'}>
                            <span className={'text-red-500 font-normal'}>DeliverInc </span>
                            memprioritaskan kemudahan serta kecepatan dalam setiap transaksi.
                        </p>
                        <div className="inline-grid auto-cols-max gap-6 grid-flow-col relative">
                            {
                                iconBoxes.map((iconBox: IconBox, index: number) => {
                                    return (
                                        <div className="flex flex-col items-center space-y-1" key={index}
                                             onClick={() => {
                                                 setIconBoxes((boxes: IconBox[]): IconBox[] => {
                                                     const newBoxes = boxes.map((box: IconBox): IconBox => {
                                                         box.isActive = false;
                                                         return box;
                                                     });
                                                     newBoxes[index].isActive = true;
                                                     return newBoxes;
                                                 });
                                             }}>
                                            <div
                                                className={`${iconBox.isActive && 'bg-rose-500 rounded-lg'} p-2 cursor-pointer transition-all duration-500`}>
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
                    <div className="absolute top-0 left-0 -right-1/2 md:right-0 md:-top-1/3 md:-left-1/4 max-w-full">
                        <Image src={RadialGradient} alt={'deliverinc radial background'}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
