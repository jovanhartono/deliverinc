import Link from "next/link";
import {useEffect, useState} from "react";
import {debounceTime, fromEvent, distinctUntilChanged} from "rxjs";
import Image from 'next/image';
import logo from '../public/favicon.ico';
import {Route, routes} from "../const/routes";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const scrollEvent = fromEvent(window, "scroll").pipe(distinctUntilChanged(), debounceTime(25))
            .subscribe(() => {
                setIsScrolled(window.scrollY > 0);
            });

        return () => {
            scrollEvent.unsubscribe();
        };
    }, []);

    return (
        <header
            className={`${isScrolled ? 'bg-gray-100/90 backdrop-blur shadow-lg' : 'bg-transparent'} ease-in-out sticky top-0 z-50 
            transition-all duration-200`}>
            <div
                className={`container justify-between items-center flex h-16 md:h-24`}>
                <Link href="/" passHref={true}>
                    <div className={'w-20 md:w-32 cursor-pointer'}>
                        <Image alt="Logo Deliverinc" src={logo}/>
                    </div>
                </Link>
                <div className={'block md:hidden w-8 h-8 flex flex-col justify-center cursor-pointer'}
                     onClick={() => setIsOpen((status: boolean) => !status)}>
                        <span className={`${isOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'} ${isScrolled ? 'bg-red-600' : 'bg-gray-100'} h-[2px] transform transition-all duration-200 ease-in-out`}/>
                        <span className={`${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'} ${isScrolled ? 'bg-red-600' : 'bg-gray-100'} h-[2px] transform transition-all duration-200 ease-in-out`}/>
                </div>
                <nav className={"hidden md:block"}>
                    <ul className={`list-none flex space-x-6 text-sm uppercase`}>
                        {
                            routes.map((route: Route, index: number) => (
                                <li key={index}>
                                    <Link href={route.path}>
                                        {
                                            index === routes.length - 1 ?
                                                <a className="shadow-lg shadow-red-500/50 hover:shadow-yellow-500/50 bg-gradient-to-r to-rose-700 from-red-500 font-medium
                                                hover:bg-gradient-to-r hover:to-amber-500 hover:from-yellow-500 py-3 px-6
                                                rounded">{route.name}</a>
                                                :
                                                <a className={`${isScrolled && 'text-red-600'} link-text font-medium`}>
                                                    {route.name}
                                                </a>
                                        }
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
