import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import WarehouseImage from '../public/images/background/warehouse.webp';
import PriceCheckImage from '../public/images/check.svg';
import Dropdown from "../components/dropdown";
import {Shipment, Shipping} from "../const/price";
import {FewCategory, Category} from "../const/fewCategory";
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {XIcon} from "@heroicons/react/solid";

export type CategoryService = {
    category: string;
    basePrice: number;
}

const Category: CategoryService[] = [
    {
        category: 'Material Plastik',
        basePrice: 5000000
    },
    {
        category: 'Tas',
        basePrice: 5000000
    },
    {
        category: 'Non Plastik',
        basePrice: 6500000
    },
    {
        category: 'Bahan Kimia',
        basePrice: 6500000
    },
    {
        category: 'Mesin',
        basePrice: 6500000
    },
    {
        category: 'Mesin Bekas',
        basePrice: 7000000
    },
    {
        category: 'Makanan',
        basePrice: 6500000
    },
    {
        category: 'Pakaian',
        basePrice: 7500000
    },
    {
        category: 'Kosmetik',
        basePrice: 7500000
    }
]

interface Volume {
    height: number;
    width: number;
    length: number;
}

enum ShippingType {
    AIR_FREIGHT = 'Air Freight',
    OCEAN_FREIGHT = 'Ocean Freight'
}

const CekHarga: NextPage = () => {
    const [shipping, setShipping] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [volume, setVolume] = useState<Volume>({height: 0, width: 0, length: 0});
    const [quantity, setQuantity] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    function getVolume(volume: Volume): number {
        return volume.height * volume.length * volume.width / 1000000;
    }

    function getTotalVolume(volume: Volume, quantity: number): string {
        const convertedVolume = getVolume(volume);
        return isNaN(convertedVolume * quantity) ? '0' : `${(convertedVolume * quantity)} M³`;
    }

    function countTotalPrice(shippingType: ShippingType, category: string, volume: Volume, weight: number, quantity: number): number {
        let totalPrice = 0;
        const basePrice = Shipping.find(s => s.service === shippingType)?.basePrice ?? 0;

        if (shippingType === ShippingType.OCEAN_FREIGHT) {
            const volumeValue = getVolume(volume);
            const categoryValue: number = Category.find(c => c.category === category)?.basePrice ?? 0;

            totalPrice = volumeValue * categoryValue * basePrice * quantity;
        }
        else if (shippingType === ShippingType.AIR_FREIGHT) {
            totalPrice = basePrice * weight;
        }

        return isNaN(totalPrice) ? 0 : totalPrice;
    }

    function preventCharactersInput(e: KeyboardEvent<HTMLInputElement>): void {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    useEffect(() => {
        if (shipping === 'Air Freight') {
            setPrice(countTotalPrice(ShippingType.AIR_FREIGHT, category, volume, weight, quantity));
        }
        else if (shipping === 'Ocean Freight') {
            setPrice(countTotalPrice(ShippingType.OCEAN_FREIGHT, category, volume, weight, quantity));
        }

    }, [shipping, category, volume, weight, quantity]);

    return (
        <>
            <Head>
                <title>Cek Harga - Deliverinc</title>
                <meta name="description"
                      content="Cek Harga - Deliverinc Importir dan Forwarder China Indonesia Terpercaya"/>
            </Head>
            <main>
                <section className="bg-rose-800 pt-12">
                    <div className="container padding-section grid md:grid-cols-2 gap-12">
                        <div className={'h-full flex flex-col'}>
                            <div className="space-y-6">
                                <h1 className={'heading-hero text-gray-100'}>
                                    Cek Harga. <br/> Mudah. <span className={'yellow-clip-text'}>Praktis</span>.<br/>
                                    <span className={'underline underline-offset-4 decoration-yellow-400'}>Cepat.</span>
                                </h1>
                                <p className={'description-section text-gray-200'}>Lakukan pengecekan harga berdasarkan
                                    kategori dan volume barang yang diinginkan dengan <span
                                        className={'text-yellow-400 font-semibold'}>praktis</span> untuk mempermudah
                                    anda mendapatkan informasi biaya yang dibutuhkan.</p>
                            </div>
                            <div
                                className="mt-6 md:mt-auto flex flex-wrap justify-between md:justify-start gap-3 md:gap-6 xl:gap-9">
                                {
                                    FewCategory.map((category: Category, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="space-y-2 flex flex-col items-center">
                                                <category.icon className={'w-6 h-6 text-gray-100'}/>
                                                <span className="description-card text-gray-100">{category.title}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div
                            className="relative min-h-[350px] md:min-h-[450px] xl:min-h-[550px] rounded-lg overflow-hidden">
                            <Image src={WarehouseImage} layout={'fill'} objectFit={"cover"} priority={true}
                                   alt={'Deliverinc-hubungi-kami'}/>
                        </div>
                    </div>
                </section>
                <section className="padding-section container grid md:grid-cols-2 gap-12 min-h-[75vh]">
                    <div className={'space-y-3'}>
                        <h1 className="heading-section rose-clip-text leading-[1.2]">Hitung Biaya Impor</h1>
                        <form className={'space-y-6'}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Pengiriman</p>
                                    <Dropdown selectedKey={setShipping} labelProps={'Pilih Layanan Pengiriman'}
                                              options={Shipping.map((shipping: Shipment) => shipping.service)}/>
                                </div>
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Jenis Barang</p>
                                    <Dropdown selectedKey={setCategory} labelProps={'Pilih Jenis Barang'}
                                              options={Category.map((category: CategoryService) => category.category)}/>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Berat (KG)</p>
                                    <input
                                        className={'input-form'}
                                        readOnly={shipping !== 'Air Freight'}
                                        placeholder={'Berat'}
                                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => preventCharactersInput(event)}
                                        type={"text"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(parseInt(e.target.value))}/>
                                </div>
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Koli</p>
                                    <input
                                        className={'input-form'}
                                        readOnly={shipping !== 'Ocean Freight'}
                                        placeholder={'Koli'}
                                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => preventCharactersInput(event)}
                                        type={"text"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}/>
                                </div>
                            </div>
                            <div>
                                <p className={'text-gray-700 text-xl font-medium'}>Ukuran (CM)</p>
                                <div className="space-x-1 md:space-x-3 flex">
                                    <input
                                        className={'input-form'}
                                        readOnly={shipping !== 'Ocean Freight'}
                                        placeholder={'Panjang'}
                                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => preventCharactersInput(event)}
                                        type={"text"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume({
                                            ...volume,
                                            length: parseInt(e.target.value)
                                        })}/>
                                    <div className={'flex items-center'}>
                                        <XIcon className={'text-gray-700 w-4 h-4'}/>
                                    </div>
                                    <input
                                        placeholder={'Lebar'}
                                        className={'input-form'}
                                        readOnly={shipping !== 'Ocean Freight'}
                                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => preventCharactersInput(event)}
                                        type={"text"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume({
                                            ...volume,
                                            width: parseInt(e.target.value)
                                        })}/>
                                    <div className={'flex items-center'}>
                                        <XIcon className={'text-gray-700 w-4 h-4'}/>
                                    </div>
                                    <input
                                        placeholder={'Tinggi'}
                                        className={'input-form'}
                                        readOnly={shipping !== 'Ocean Freight'}
                                        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => preventCharactersInput(event)}
                                        type={"text"}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume({
                                            ...volume,
                                            height: parseInt(e.target.value)
                                        })}/>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Total Volume (M<sup>3</sup>)</p>
                                    <input
                                        className={`${shipping === 'Ocean Freight' && 'read-only:bg-rose-500 read-only:text-gray-100'} input-form`}
                                        readOnly={true}
                                        value={getTotalVolume(volume, quantity)}
                                        type={"text"}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <p className={'text-gray-700 text-xl font-medium'}>Total Harga</p>
                                    <input
                                        className={'input-form read-only:bg-rose-500 read-only:text-gray-100'}
                                        readOnly={true}
                                        value={`Rp ${price.toLocaleString('id')},00`}
                                        type={"text"}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="relative">
                        <Image src={PriceCheckImage} layout={"fill"} objectFit={'contain'}
                               alt={'deliverinc-check-harga'}/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CekHarga;
