import Link from "next/link";
import {LightningBoltIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import {debounceTime, fromEvent, distinctUntilChanged} from "rxjs";
import Image from 'next/image';
import logo from '../public/images/logo.png';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const routes = [
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

    useEffect(() => {
        const scrollEvent = fromEvent(window, "scroll").pipe(distinctUntilChanged(), debounceTime(10))
            .subscribe(() => {
                setIsScrolled(window.scrollY > 0);
            });

        return () => {
            scrollEvent.unsubscribe();
        };
    }, []);

    return (
        <header className={`${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-transparent'} sticky top-0 z-50 transition-all duration-200`}>
            <div
                className={`container justify-between items-center flex mx-auto py-6 text-gray-100`}>
                <Link href="/">
                    <div className={'w-48'}>
                        <Image src={logo}/>
                    </div>
                </Link>
                <nav>
                    <ul className={`${isScrolled ? 'text-red-600' : 'text-gray-100'} list-none flex space-x-6 text-sm uppercase
                    transition-all duration-200`}>
                        {
                            routes.map((route, index: number) => (
                                <li key={index}>
                                    <Link href={route.path}>
                                        <a className={'hover:text-red-800 hover:font-medium hover:transition-all hover:duration-200'}>{route.name}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

            </div>
        </header>
    )
}
