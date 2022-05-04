export type Route = {
    name: string,
    path: string
};

export const routes: Route[] = [
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
        name: "Hubungi Kami",
        path: "/hubungi-kami",
    },
];
