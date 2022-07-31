import {NextPage} from "next";
import Head from "next/head";
import {BadgeCheckIcon, ShieldCheckIcon, TranslateIcon} from "@heroicons/react/solid";
import Image from "next/image";
import PaymentImage from "../public/images/background/payment.webp";
import BusinessDealImage from "../public/images/deliverinc-transaksi.svg";
import {CashIcon, CreditCardIcon, SearchIcon} from "@heroicons/react/outline";

const JasaPembelian: NextPage = () => {
    const ServiceAdvantage = [
        {
            icon: SearchIcon,
            title: 'Pencarian Supplier',
            description: 'Kami senantiasa membantu anda dalam melakukan pencarian supplier terpercaya.'
        },
        {
            icon: TranslateIcon,
            title: 'Bahasa',
            description: 'Tidak ada lagi language barrier dengan supplier.'
        },
        {
            icon: CreditCardIcon,
            title: 'Kemudahan Transaksi',
            description: 'Membantu mengurus pembayaran dan pemesanan barang dengan supplier.'
        },
        {
            icon: CashIcon,
            title: 'Ongkos Terjangkau',
            description: 'Menjawab permasalahan impor yang sulit dengan biaya yang terjangkau.'
        },
    ]

    return (
        <>
            <Head>
                <title>Jasa Pembelian - Deliverinc</title>
                <meta name="description"
                      content="Jasa Pembelian - Deliverinc siap melayani kebutuhan anda dalam melakukan transaksi dengan supplier China."/>
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
                                            Transaksi Dengan <span
                                            className="underline underline-offset-4 decoration-rose-700 rose-clip-text">Mudah.</span>
                                            <span> </span>
                                            <span
                                                className="underline underline-offset-4 decoration-rose-700 rose-clip-text">Anti-Ribet.</span>
                                            <span> </span>
                                            <span
                                                className="underline underline-offset-4 decoration-rose-700 rose-clip-text">Aman.</span>
                                        </h1>
                                        <p className={'description-section'}>Solusi <span
                                            className={'amber-clip-text font-semibold'}>utama</span> bagi anda yang
                                            mempunyai kendala dalam
                                            bahasa, pembayaran, serta pencarian supplier.</p>
                                    </div>
                                    <button className="button">
                                        <a target={"_blank"} rel={'noreferrer noopener'}
                                           href={'https://wa.me/message/AE5I33MU5ZDBM1'}>
                                            <div className="space-x-2 flex items-center">
                                                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 24 24" width="24px"
                                                     height="24px">
                                                    <path
                                                        d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"/>
                                                </svg>
                                                <span>WhatsApp</span>
                                            </div>
                                        </a>
                                    </button>
                                </div>
                                <div className="flex">
                                    <ul className={'grid md:grid-cols-2 gap-3 flex-grow'}>
                                        <li className={'flex items-center space-x-1'}>
                                            <ShieldCheckIcon className={'w-8 h-8 text-amber-500'}/>
                                            <p className={'font-medium text-lg text-transparent bg-gradient-to-b from-amber-600 to-yellow-400 bg-clip-text tracking-tight'}>Jaminan
                                                Aman</p>
                                        </li>
                                        <li className={'flex items-center space-x-1'}>
                                            <BadgeCheckIcon className={'w-8 h-8 text-amber-500'}/>
                                            <p className={'font-medium text-lg text-transparent bg-gradient-to-b from-amber-600 to-yellow-400 bg-clip-text tracking-tight'}>Terima
                                                Beres</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="min-h-[350px] md:min-h-[450px] xl:min-h-[550px] h-full relative rounded-lg overflow-hidden shadow-lg">
                                <Image src={PaymentImage} layout={"fill"}
                                       priority={true}
                                       objectFit={"cover"}
                                       alt={'Deliverinc Payment'}
                                       objectPosition={"right"}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padding-section container grid md:grid-cols-2 gap-12 min-h-[75vh]">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <span
                                className={'uppercase tracking-widest text-sm font-medium text-rose-500'}>Keuntungan</span>
                            <h1 className="rose-clip-text leading-[1.2] heading-section tracking-tight">Jasa
                                Pembelian</h1>
                            <hr className="border border-rose-500 w-32"/>
                        </div>
                        <p className={'description-section'}>Telah melayani ribuan pelanggan dengan tingkat kepuasan
                            maksimal. Kami berkomitmen untuk terus maju dan memberikan akses pelayanan yang
                            terbaik.</p>
                        <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-6">
                            {
                                ServiceAdvantage.map((item, index: number) => {
                                    return (
                                        <div
                                            className="p-4 rounded shadow flex flex-col hover:shadow-rose-100 hover:shadow-md transition-shadow duration-200 ease-in-out"
                                            key={index}>
                                            <div className="flex items-center mb-3 ">
                                                <div
                                                    className="p-2 rounded-full bg-rose-500 flex justify-center items-center">
                                                    <item.icon className={'w-4 h-4 text-gray-100'}/>
                                                </div>
                                                <h3 className={'tracking-tight text-lg font-medium text-gray-600 ml-2'}>{item.title}</h3>
                                            </div>
                                            <p className={'description-card'}>{item.description}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <Image src={BusinessDealImage} layout={"fill"} objectFit={'contain'}
                               alt={'deliverinc-transaksi'}/>
                    </div>
                </section>
            </main>
        </>
    );
}

export default JasaPembelian;
