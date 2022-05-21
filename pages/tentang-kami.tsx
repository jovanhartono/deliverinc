import Head from "next/head";
import Image from "next/image";
import {NextPage} from "next";
import {ArrowRightIcon} from "@heroicons/react/outline";
import ContainerImage from '../public/images/background/container.webp';
import BusinessDealImage from '../public/images/background/deliverinc-bisnis.svg';
import QuestionImage from '../public/images/background/pertanyaan.svg';
import ChartImage from '../public/images/background/chart.svg';
import Link from "next/link";
import {BadgeCheckIcon, ShieldCheckIcon} from "@heroicons/react/solid";
import {Benefit, Benefits} from "../const/benefits";
import Accordion from "../components/accordion";
import {Achievements} from "../const/achievements";

const frequentlyAskedQuestions: { title: string, description: string }[] = [
    {
        title: 'Apa yang harus saya lakukan jika ingin impor barang ?',
        description: 'Jika anda sudah mendapatkan supplier barang yang anda inginkan dan telah melakukan transaksi, kami akan menyediakan kode marking dan alamat gudang kami untuk Anda teruskan kepada supplier. Supplier akan mengirimkan barang Anda ke gudang kami dan kami yang akan meneruskan pengiriman ke lokasi Anda.',
    },
    {
        title: 'Berapa lama durasi pengiriman ?',
        description: 'Dengan pengiriman melalui laut, barang Anda akan sampai pada 25-30 hari setelah barang sampai di gudang kami di China. Dengan pengiriman melalui udara, barang Anda akan sampai pada 7-10 hari setelah barang sampai di gudang kami di China.',
    },
    {
        title: 'Bagaimana jika barang saya hilang ?',
        description: 'Dengan proteksi yang extra, kami jamin barang Anda tidak akan hilang. Namun Anda tidak perlu khawatir jika terjadi kehilangan karena setiap pengiriman sudah kami asuransikan. Kami ganti 100% sesuai harga barang.',
    },
    {
        title: 'Bagaimana saya memastikan bahwa tidak ada penipuan dan telah memakai jasa impor yang terpercaya ?',
        description: 'Kami tidak akan melakukan penagihan kepada Anda sebelum barang Anda tiba di gudang kami di Jakarta dan siap untuk dikirim.',
    }
];

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
                        <div className="container grid md:grid-cols-2 gap-12 padding-section mt-12">
                            <div className="flex flex-col justify-between space-y-6">
                                <div className={'relative z-10 flex flex-col items-start space-y-6'}>
                                    <div className="space-y-3">
                                        <h1 className={'heading-hero text-transparent bg-clip-text from-rose-600 to-pink-600 bg-gradient-to-b'}>
                                            Solusi Terbaik Kebutuhan Bisnis Impor Anda
                                        </h1>
                                        <p className={'description-section'}>Kami
                                            terus
                                            berkomitmen untuk memberikan layanan impor yang <span
                                                className={'amber-clip-text font-semibold'}>cepat</span> dan <span
                                                className="amber-clip-text font-semibold">aman</span> bagi Anda.
                                            Kenyamanan
                                            Anda adalah yang terutama bagi kami.</p>
                                    </div>
                                    <button className="button flex items-center">
                                        <Link href={'/hubungi-kami'}>
                                            Hubungi Kami
                                        </Link>
                                        <ArrowRightIcon className={'inline-block h-4 w-4 ml-3'}/>
                                    </button>
                                </div>
                                <div className="flex">
                                    <ul className={'grid md:grid-cols-2 gap-3'}>
                                        <li className={'flex items-center space-x-1'}>
                                            <ShieldCheckIcon className={'w-8 h-8 text-amber-500'}/>
                                            <p className={'font-medium text-lg text-transparent bg-gradient-to-b from-amber-600 to-yellow-400 bg-clip-text tracking-tight'}>Jaminan
                                                Aman</p>
                                        </li>
                                        <li className={'flex items-center space-x-1'}>
                                            <BadgeCheckIcon className={'w-8 h-8 text-amber-500'}/>
                                            <p className={'font-medium text-lg text-transparent bg-gradient-to-b from-amber-600 to-yellow-400 bg-clip-text tracking-tight'}>24/7
                                                Layanan Pelanggan</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="min-h-[350px] md:min-h-[450px] xl:min-h-[550px] h-full relative rounded-lg overflow-hidden shadow-lg">
                                <Image src={ContainerImage} layout={"fill"} objectFit={"cover"}
                                       alt={'Deliverinc Container'}
                                       objectPosition={"bottom"}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padding-section container grid gap-12 md:grid-cols-2">
                    <div className={'space-y-3'}>
                        <span
                            className={'uppercase tracking-widest text-sm font-medium text-rose-500'}>Keunggulan kami</span>
                        <div className="space-y-3">
                            <div className={'flex flex-wrap heading-section'}>
                                <h1 className="rose-clip-text leading-[1.2]">Profesional.</h1>
                                <h1 className="rose-clip-text leading-[1.2]">Terpercaya. Aman.</h1>
                            </div>
                            <hr className="border border-rose-500 w-32"/>
                            <p className={'description-section'}>Telah melayani ribuan pelanggan dengan tingkat kepuasan
                                maksimal. Kami berkomitmen untuk terus maju dan memberikan akses pelayanan yang
                                terbaik.</p>
                        </div>
                        <div className={'pt-3'}>
                            <ul className={'grid lg:grid-cols-2 lg:grid-rows-3 gap-6'}>
                                {
                                    Benefits.map((benefit: Benefit, index: number) => {
                                        return (
                                            <li className="flex space-x-3 col-span-1 row-span-1 items-start"
                                                key={index}>
                                                <div
                                                    className="flex items-center p-3 bg-rose-500 rounded-full justify-center">
                                                    <benefit.icon className={'w-6 h-6 text-gray-100'}/>
                                                </div>
                                                <div className="space-y-1">
                                                    <h2 className="text-lg text-gray-700 font-medium">{benefit.title}</h2>
                                                    <p className="description-card">{benefit.description}</p>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <Image src={BusinessDealImage} layout={"fill"} objectFit={'contain'}
                               alt={'deliverinc-bisnis-deal'}/>
                    </div>
                </section>
                <section
                    className={'padding-section relative bg-gradient-to-b from-gray-50/50 to-rose-100/20'}>
                    <div className="container grid md:grid-cols-2 gap-12 relative z-10">
                        <div className={'space-y-3'}>
                            <span
                                className={'uppercase tracking-widest text-sm font-medium text-rose-500'}>Pencapaian Kami</span>
                            <div className="space-y-3">
                                <div className={'flex flex-wrap heading-section'}>
                                    <h1 className="rose-clip-text leading-[1.2]">Terus Berkembang.</h1>
                                </div>
                                <hr className="border border-rose-500 w-32"/>
                                <p className={'description-section'}>Deliverinc berkomitmen untuk terus berkembang
                                    demi melayani permintaan yang terus meningkat.</p>
                            </div>
                            <div className="pt-3 md:pt-12 max-w-full">
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
                    </div>
                    <div className="absolute right-0 bottom-0 top-1/2 left-1/3 md:left-1/2">
                        <div className="relative h-full">
                            <Image src={ChartImage} layout={'fill'} alt={'deliverinc-grafik-permintaan'}/>
                        </div>
                    </div>
                </section>
                <section className="padding-section container grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h1 className="heading-section rose-clip-text">Frequently <br/> Asked Question</h1>
                        <Accordion accordionData={frequentlyAskedQuestions}/>
                    </div>
                    <div className="flex items-start">
                        <div className="w-full relative hidden md:block h-[500px]">
                            <Image src={QuestionImage} layout={"fill"} objectFit={'contain'}
                                   alt={'deliverinc-bisnis-kesepakatan'}/>
                        </div>
                    </div>
                </section>
                <section
                    className="container bg-amber-50 padding-section space-y-6 flex flex-col items-center justify-center">
                    <h1 className="heading-section text-center rose-clip-text leading-[1.2]">Punya Pertanyaan lagi?</h1>
                    <button className="button">
                        <a target={"_blank"} rel={'noreferrer noopener'} href={'https://wa.me/message/AE5I33MU5ZDBM1'}>
                            <div className="space-x-2 flex items-center">
                                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"
                                     height="24px">
                                    <path
                                        d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"/>
                                </svg>
                                <span>WhatsApp</span>
                            </div>
                        </a>
                    </button>
                </section>
            </main>
        </>
    );
}

export default TentangKami;
