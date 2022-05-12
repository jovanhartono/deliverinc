import {ComponentProps} from "react";
import {
    AcademicCapIcon,
    CashIcon,
    ChatIcon,
    ClockIcon,
    CubeIcon,
    ShieldCheckIcon,
} from "@heroicons/react/solid";

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element;

export type Benefit = {
    icon: HeroIcon,
    title: string,
    description: string
};

export const Benefits: Benefit[] = [
    {
        icon: ChatIcon,
        title: 'Bebas Konsultasi',
        description: 'Menjawab semua pertanyaan dan keraguan anda mengenai impor.'
    },
    {
        icon: CashIcon,
        title: 'Aman di Dompet',
        description: 'Layanan impor terbaik dengan harga yang sangat terjangkau dan transparan.'
    },
    {
        icon: AcademicCapIcon,
        title: 'Profesional',
        description: 'Membantu dan memberikan pelayanan terbaik untuk kenyamanan Anda.'
    },
    {
        icon: ClockIcon,
        title: 'Tepat Waktu',
        description: 'Pengiriman dilakukan dengan efektif sehingga barang Anda akan sampai tepat waktu.'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Aman',
        description: 'Setiap pengiriman sudah dilengkapi asuransi kehilangan dan kerusakan.'
    },
    {
        icon: CubeIcon,
        title: 'Kirim sesukamu',
        description: 'Kami mulai mengirim dari jumlah minimum terkecil yaitu 0.1 CBM.'
    }
]
