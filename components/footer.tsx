import Logo from '../public/favicon.ico';
import Image from 'next/image';
import {Route, Routes} from "../const/routes";
import Link from 'next/link';
import InstagramIcon from '../public/images/instagram-icon.svg';
import WhatsappIcon from '../public/images/whatsapp-icon.svg';
import {MailIcon} from "@heroicons/react/outline";

export default function Footer() {

    return (
        <footer className={'container padding-section'}>
            <div className={'grid grid-cols-2 gap-12 md:gap-0 md:grid-cols-4'}>
                <div className={'col-span-2 md:col-span-1'}>
                    <div className="relative w-32 h-12">
                        <Image src={Logo} layout={"fill"} objectFit={"cover"} alt={'deliverinc logo footer'}/>
                    </div>
                </div>
                <div className={'space-y-4'}>
                    <h2 className={`rose-clip-text text-xl font-medium`}>Navigation</h2>
                    <nav>
                        <ul className={'space-y-3'}>
                            {
                                Routes.map((route: Route, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={route.path}>
                                                <a className={`link-text tracking-tight font-light text-sm`}>{route.name}</a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className={'space-y-4'}>
                    <h2 className={`rose-clip-text text-xl font-medium`}>Social</h2>
                    <ul className={'font-light text-sm tracking-tight space-y-3'}>
                        <li>
                            <a href={'https://instagram.com/deliverinc.id'} target={'_blank'} rel="noreferrer noopener">
                                <div className="flex items-center space-x-2">
                                    <div className="relative w-6 h-6">
                                        <Image src={InstagramIcon} layout={"fill"} objectFit={"cover"}
                                               alt="deliverinc instagram icon footer"/>
                                    </div>
                                    <p className={'link-text'}>Instagram</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={'https://wa.me/message/AE5I33MU5ZDBM1'} target={'_blank'}
                               rel="noreferrer noopener">
                                <div className="flex items-center space-x-2">
                                    <div className="relative w-6 h-6">
                                        <Image src={WhatsappIcon} layout={"fill"} objectFit={"cover"}
                                               alt="deliverinc whatsapp icon footer"/>
                                    </div>
                                    <p className={'link-text'}>Whatsapp</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href={'mailto:deliverinc.id@gmail.com'} target={'_blank'} rel="noopener noreferrer">
                                <div className={'flex space-x-2 items-center cursor-pointer'}>
                                    <MailIcon className={'w-6 h-6 text-gray-500'}/>
                                    <span className={'link-text'}>Email</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'space-y-4'}>
                    <h2 className={`rose-clip-text text-xl font-medium`}>Location</h2>
                    <ul className={'font-light text-sm tracking-tight space-y-3'}>
                        <li>
                            <a href={'https://www.google.com/maps/dir//deliverinc/@-6.1721938,106.7155555,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69f1232b348385:0xbcb88b1ec3a2af86!2m2!1d106.7821273!2d-6.2212923'}
                               target="_blank" rel="noopener noreferrer" className="link-text">PT. Deliverinc
                                Ekspresindo Sukses Jaya</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer"
                               href={'https://www.google.com/maps/dir//deliverinc/@-6.1721938,106.7155555,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69f1232b348385:0xbcb88b1ec3a2af86!2m2!1d106.7821273!2d-6.2212923'}
                               className={'text-gray-500 border-b border-b-gray-500 hover:border-b-rose-500 transition-all duration-200'}>
                                Bellezza BSA 1st Floor Unit 106 Permata Hijau Keb. Lama Jakarta Selatan 12210
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
