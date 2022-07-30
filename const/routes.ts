export type Route = {
    name: string,
    path: string
};

export const Routes: Route[] = [
    {
        name: "Tentang Kami",
        path: "/tentang-kami",
    },
    {
        name: "Cek Resi",
        path: "/cek-resi",
    },
    {
        name: "Cek Harga",
        path: "/cek-harga",
    },
    {
        name: "Jasa Pembelian",
        path: "/jasa-pembelian"
    },
    {
        name: "Hubungi Kami",
        path: "/hubungi-kami"
    }
];
