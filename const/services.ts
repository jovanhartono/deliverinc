import {ComponentProps} from "react";
import {
    CubeIcon,
    CurrencyDollarIcon,
    PaperAirplaneIcon,
    ShoppingBagIcon
} from "@heroicons/react/outline";
type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element;

export type Service = {
    icon: HeroIcon,
    title: string,
    subTitle?: string,
    description: string,
}

export const Services: Service[] = [
    {
        icon: CubeIcon,
        title: 'Ocean Fright',
        description: 'Less than Container Load adalah pengiriman impor melalui jalur laut dengan jumlah minimal 0.1 CBM dengan durasi pengiriman 25-30 hari. Kurangi biaya bisnis impor dengan penawaran harga kompetitif dari kami. Tersedia bantuan Tax Refund atau Customs Clearance kepada supplier.'
    },
    {
        icon: CubeIcon,
        title: 'Ocean Fright',
        description: 'Full Container Load adalah pengiriman impor melalui jalur laut dalam satu kontainer penuh khusus untuk barang Anda. Kirim semua barang Anda tanpa cemas tergabung dengan barang orang lain. Solusi terbaik untuk pengiriman dalam jumlah besar. Kontainer tersedia dengan muatan sampai dengan 78 cbm. Tersedia pula bantuan Tax Refund atau Customs Clearance kepada supplier.'
    },
    {
        icon: PaperAirplaneIcon,
        title: 'Air Freight',
        description: 'Pengiriman impor melalui jalur udara dengan estimasi waktu sekitar 5-7 hari. Solusi terbaik untuk barang ringan yang membutuhkan durasi pengiriman yang cepat.'
    },
    {
        icon: ShoppingBagIcon,
        title: 'Jasa Pembelian',
        description: 'Solusi terbaik berbelanja di marketplace China dengan proteksi ekstra. Kami bantu sampai tuntas! Anda cukup berikan informasi produk seperti gambar, link, dan kuantitas yang diinginkan. Kemudian tim kami yang akan membantu menghubungi supplier di China terkait harga dan ketersedian barang, semua pertanyaan anda seputar barang akan kami sampaikan kepada supplier.'
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Jasa Transfer',
        description: 'Melayani jasa transfer RMB dan USD demi kemudahan transaksi Anda. Anda bayar dalam rupiah dan kami yang akan menyampaikan pembayaran Anda kepada supplier di China. Detail bukti pembayaran akan kami kirimkan kepada Anda.'
    }
]
