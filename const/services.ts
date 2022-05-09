import {ComponentProps} from "react";
import {
    CreditCardIcon,
    CubeIcon,
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
        title: 'Ocean Fright - LCL',
        description: 'Less than Container Load adalah pengiriman impor melalui jalur laut dengan jumlah minimal 0.1 CBM dengan durasi pengiriman 25-30 hari. Kurangi biaya bisnis impor dengan penawaran harga kompetitif dari kami dengan bantuan Tax Refund atau Customs Clearance.'
    },
    {
        icon: CubeIcon,
        title: 'Ocean Fright - FCL',
        description: 'Full Container Load adalah pengiriman impor melalui jalur laut dalam satu kontainer penuh khusus untuk barang Anda. Kontainer tersedia dengan muatan sampai dengan 78 cbm dengan bantuan Tax Refund atau Customs Clearance.'
    },
    {
        icon: PaperAirplaneIcon,
        title: 'Air Freight',
        description: 'Pengiriman impor melalui jalur udara dengan estimasi waktu sekitar 5-7 hari. Solusi terbaik untuk barang ringan yang membutuhkan durasi pengiriman yang cepat.'
    },
    {
        icon: ShoppingBagIcon,
        title: 'Jasa Pembelian',
        description: 'Solusi terbaik berbelanja di marketplace China dengan proteksi ekstra. Cukup berikan informasi produk seperti gambar, link, dan kuantitas yang diinginkan lalu tim kami yang akan membantu menghubungi supplier di China terkait harga dan ketersedian barang.'
    },
    {
        icon: CreditCardIcon,
        title: 'Jasa Transfer',
        description: 'Melayani jasa transfer RMB dan USD demi kemudahan transaksi Anda. Anda bayar dalam rupiah dan kami yang akan menyampaikan pembayaran Anda kepada supplier di China. Detail bukti pembayaran akan kami kirimkan kepada Anda.'
    }
]
