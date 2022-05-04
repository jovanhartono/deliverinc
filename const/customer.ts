import {StaticImageData} from 'next/image';
import AmhanImage from '../public/images/testimonials/Amhan.webp';
import RismaImage from '../public/images/testimonials/Risma.webp';
import SalimImage from '../public/images/testimonials/Salim.webp';
import MikaelImage from '../public/images/testimonials/Mikael.webp';

export type Testimonial = {
    name: string;
    title: string;
    comment: string;
    avatar: StaticImageData;
};

export const customers: Testimonial[] = [
    {
        name: 'Salim',
        title: 'Pengusaha Mesin',
        avatar: SalimImage,
        comment: 'Saya menggunakan Deliverinc karena pengiriman aman dan dapat mengurus Tax Refund dan Custom Declaration.'
    },
    {
        name: 'Amhan',
        title: 'Pengusaha',
        avatar: AmhanImage,
        comment: 'Pelayanan OK, pengiriman tergolong cepat. Next pasti pakai Deliverinc lagi!'
    },
    {
        name: 'Risma',
        title: 'Pedagang Kabel Soundsystem',
        avatar: RismaImage,
        comment: 'Jasa Belanja Deliverinc sangat kooperatif dan profesional, belanja dan komunikasi dengan supplier China jadi mudah.'
    },
    {
        name: 'Mikael',
        title: 'Pedagang Aksesoris',
        avatar: MikaelImage,
        comment: 'Mantap ! Kirim barang kecilpun tetap sampai dengan aman.'
    },

];
