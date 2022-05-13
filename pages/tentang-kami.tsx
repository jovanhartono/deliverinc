import Head from "next/head";
import Image from "next/image";
import {NextPage} from "next";
import {ArrowRightIcon} from "@heroicons/react/outline";
import ContainerImage from '../public/images/background/container.webp';
import BusinessDealImage from '../public/images/background/deliverinc-bisnis.svg';
import QuestionImage from '../public/images/background/pertanyaan.svg';
import ChartImage from '../public/images/background/chart.svg';
import Link from "next/link";
import {BadgeCheckIcon, PhoneIcon, ShieldCheckIcon} from "@heroicons/react/solid";
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
                                            <a>Hubungi Kami</a>
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
                                className="min-h-[350px] lg:min-h-[550px] h-full relative rounded-lg overflow-hidden shadow-lg">
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
                                                    <h3 className="text-lg text-gray-700 font-medium">{benefit.title}</h3>
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
                <section className="container bg-amber-50 padding-section space-y-6 flex flex-col items-center justify-center">
                    <h1 className="heading-section text-center rose-clip-text leading-[1.2]">Punya Pertanyaan lagi?</h1>
                    <button className="button">
                        <Link href={'https://wa.me/message/AE5I33MU5ZDBM1'} passHref={true}>
                            <a target={"_blank"} rel={'noreferrer noopener'}>
                                <div className="space-x-3 flex items-center">
                                    <PhoneIcon className={'w-5 h-5'} />
                                    <span>WhatsApp</span>
                                </div>
                            </a>
                        </Link>
                    </button>
                </section>
            </main>
        </>
    );
}

export default TentangKami;
