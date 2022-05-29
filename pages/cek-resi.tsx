import {NextPage} from "next";
import Head from 'next/head';
import {ArrowDownIcon} from "@heroicons/react/outline";
import Image from "next/image";
import HeroBackground from "../public/images/background/cargo-2.jpg";
import TrackingImage from '../public/images/background/tracking.svg';
import {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {SearchIcon} from "@heroicons/react/solid";
import dayjs from "dayjs";
import 'dayjs/locale/id';

export interface DeliveryType {
    data: {
        id: number,
        attributes: {
            deliveryTypeName: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
        }
    };
}

export interface Attributes {
    receiptNumber: string;
    markingCode: string;
    quantity: number;
    weight: number;
    volume: number;
    tibaDiGudangChina: Date;
    loading: Date;
    tibaDiPelabuhanJakarta: Date;
    tibaDiGudangJakarta: Date;
    step: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    deliveryType: DeliveryType;
    productType: {
        data?: any
    };
}

export interface Meta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface OrderStatus {
    data: {
        id: number;
        attributes: Attributes;
    }[];
    meta: Meta;
}

const CekResi: NextPage = () => {
    const scrollRef = useRef<null | HTMLElement>(null);
    const [receiptNumber, setReceiptNumber] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<OrderStatus | undefined>(undefined);

    const trackingInformation = [
        {
            title: 'RESI',
            data: data?.data[0].attributes.receiptNumber
        },
        {
            title: 'MARKING',
            data: data?.data[0].attributes.markingCode
        },
        {
            title: 'JENIS PENGIRIMAN',
            data: data?.data[0].attributes.deliveryType.data.attributes.deliveryTypeName
        },
        {
            title: 'BERAT (KG)',
            data: data?.data[0].attributes.weight
        },
        {
            title: 'VOLUME (CBM)',
            data: data?.data[0].attributes.volume
        },
        {
            title: 'KOLI',
            data: data?.data[0].attributes.quantity
        }
    ];

    async function fetchPackageStatus(receiptNumber: string) {
        setError(false);
        const res = await fetch(`https://backstage-deliverinc.herokuapp.com/api/receipts?filters[receiptNumber][$eq]=${receiptNumber}&populate=%2A`)

        return await res.json();
    }

    return (
        <>
            <Head>
                <title>Cek Resi - Deliverinc</title>
                <meta name="description"
                      content="Tentang Kami - Deliverinc Importir dan Forwarder China Indonesia Terpercaya"/>
            </Head>
            <main>
                <section className="padding-section">
                    <div className="container grid md:grid-cols-2 gap-12 pt-12">
                        <div className={'space-y-6'}>
                            <div className="space-y-3">
                                <h1 className={'heading-hero text-transparent bg-clip-text from-rose-600 to-pink-600 bg-gradient-to-b'}>
                                    Periksa Status <br/> Pengiriman Anda <br/> dengan Mudah. <br/>
                                </h1>
                                <p className={'description-section'}>Masukkan nomor resi pengiriman anda dibawah ini dan
                                    sistem kami akan mengecek secara <span
                                        className={'amber-clip-text font-semibold'}>langsung</span> lokasi paket
                                    kesayangan anda.</p>
                            </div>
                            <button className="button flex items-center"
                                    onClick={() => scrollRef.current?.scrollIntoView({behavior: 'smooth'})}>
                                Lokasi Kami
                                <ArrowDownIcon className={'inline-block h-4 w-4 ml-3'}/>
                            </button>
                        </div>
                        <div
                            className="relative min-h-[350px] md:min-h-[450px] xl:min-h-[550px] rounded-lg overflow-hidden shadow-lg">
                            <Image src={HeroBackground} layout={'fill'} objectFit={"cover"}
                                   alt={'Deliverinc-hubungi-kami'}/>
                        </div>
                    </div>
                </section>
                <section className="container padding-section min-h-[75vh] grid gap-12 md:grid-cols-2">
                    <div className={'space-y-6'}>
                        <div className={'space-y-3'}>
                            <span
                                className={'uppercase tracking-widest text-sm font-medium text-rose-500'}>Cek resi</span>
                            <h1 className="heading-section rose-clip-text">
                                Lacak Keberadaan Paket Anda.
                            </h1>
                            <div className="flex space-x-3 pt-3">
                                <input
                                    className={'input-form w-48'}
                                    placeholder={'Nomor Resi'}
                                    type={"text"}
                                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                        if (e.key === 'Enter') fetchPackageStatus(receiptNumber).then((orderStatus: OrderStatus) => {
                                            if (orderStatus.data[0] === undefined) {
                                                setError(true);
                                                setData(undefined);
                                                return;
                                            }
                                            setData(orderStatus);
                                        });
                                    }}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setReceiptNumber(e.target.value)}
                                />
                                <button className="p-3 rounded-full bg-rose-500 hover:bg-rose-600 basic-transition"
                                        onClick={() => fetchPackageStatus(receiptNumber).then((orderStatus: OrderStatus) => {
                                            if (orderStatus.data[0] === undefined) {
                                                setError(true);
                                                setData(undefined);
                                                return;
                                            }
                                            setData(orderStatus);
                                        })}>
                                    <SearchIcon className={'w-5 h-5 text-white'}/>
                                </button>
                            </div>
                        </div>
                        {
                            data && (
                                <div className={'py-3 px-3 border rounded-md border-rose-500 space-y-3'}>
                                    <h1 className="text-3xl md:text-4xl font-semibold rose-clip-text leading-[1.2]">
                                        Tracking Order
                                    </h1>
                                    <hr className="border border-rose-500 w-32"/>
                                    <div className="grid grid-cols-2 gap-3">
                                        {
                                            trackingInformation.map((info, index: number) => {
                                                return (
                                                    <div key={index}>
                                                        <h2 className={'text-base md:text-lg tracking-wider uppercase rose-clip-text font-semibold'}>
                                                            {info.title}
                                                        </h2>
                                                        <p className="text-sm md:text-base text-gray-500 tracking-tight font-light">{info.data}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={'space-y-6 pt-3'}>
                                        <div className="space-x-4 flex items-center">
                                            <div
                                                className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiGudangChina)) ? 'bg-rose-500 ring-rose-500' : 'bg-gray-500 ring-gray-500'} w-3 h-3 rounded-full ring-1 ring-offset-2`}/>
                                            <div className="">
                                                <h2 className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiGudangChina)) ? 'text-rose-500' : 'text-gray-500'} text-lg font-medium tracking-tight`}>
                                                    Barang Masuk Gudang China
                                                </h2>
                                                <p className="description-card">{dayjs(data.data[0].attributes.tibaDiGudangChina).locale('id').format('dddd, DD MMMM YYYY')}</p>
                                            </div>
                                        </div>
                                        <div className="space-x-3 flex items-center">
                                            <div
                                                className={`${dayjs().isAfter(dayjs(data.data[0].attributes.loading)) ? 'bg-rose-500 ring-rose-500' : 'bg-gray-500 ring-gray-500'} w-3 h-3 rounded-full ring-1 ring-offset-2`}/>
                                            <div>
                                                <h2 className={`${dayjs().isAfter(dayjs(data.data[0].attributes.loading)) ? 'text-rose-500' : 'text-gray-500'} text-lg font-medium tracking-tight`}>
                                                    Loading di Pelabuhan China
                                                </h2>
                                                <p className="description-card">{dayjs(data.data[0].attributes.loading).locale('id').format('dddd, DD MMMM YYYY')}</p>
                                            </div>
                                        </div>
                                        <div className="space-x-3 flex items-center">
                                            <div
                                                className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiPelabuhanJakarta)) ? 'bg-rose-500 ring-rose-500' : 'bg-gray-500 ring-gray-500'} w-3 h-3 rounded-full ring-1 ring-offset-2`}/>
                                            <div>
                                                <h2 className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiPelabuhanJakarta)) ? 'text-rose-500' : 'text-gray-500'} text-lg font-medium tracking-tight`}>
                                                    Barang Sampai di Pelabuhan Jakarta
                                                </h2>
                                                <p className="description-card">{dayjs(data.data[0].attributes.tibaDiPelabuhanJakarta).locale('id').format('dddd, DD MMMM YYYY')}</p>
                                            </div>
                                        </div>
                                        <div className="space-x-3 flex items-center">
                                            <div
                                                className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiGudangJakarta)) ? 'bg-rose-500 ring-rose-500' : 'bg-gray-500 ring-gray-500'} w-3 h-3 rounded-full ring-1 ring-offset-2`}/>
                                            <div>
                                                <h2 className={`${dayjs().isAfter(dayjs(data.data[0].attributes.tibaDiGudangJakarta)) ? 'text-rose-500' : 'text-gray-500'} text-lg font-medium tracking-tight`}>
                                                    Barang Masuk di Gudang Jakarta
                                                </h2>
                                                <p className="description-card">{dayjs(data.data[0].attributes.tibaDiGudangJakarta).locale('id').format('dddd, DD MMMM YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            error && (
                                <p className={'description-text text-red-500'}>Nomor resi belum diinput / salah!</p>)
                        }
                    </div>
                    <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px]">
                        <Image src={TrackingImage} layout={'fill'} objectFit={"contain"} objectPosition={'top'}
                               alt={'Deliverinc-hubungi-kami'}/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CekResi;
