import {Testimonial} from "../const/customer";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import {EffectCards, Autoplay} from "swiper";
import {ChatAlt2Icon} from "@heroicons/react/outline";
import Image from 'next/image';

interface SwiperCardProps {
    swiperData: Testimonial[];
}

export default function SwiperCard({swiperData}: SwiperCardProps) {
    return (
        <Swiper
            className={'mySwiper h-full w-full aspect-square xl:w-4/5'}
            effect={"cards"}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}>
            {
                swiperData.map((item: Testimonial, index: number) => {
                    return (
                        <SwiperSlide key={index} className={'bg-white shadow-lg shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/40 border border-gray-100 rounded-lg'}>
                            <div className="flex flex-col p-6 space-y-6 h-full">
                                <ChatAlt2Icon className={'w-16 h-16 md:w-24 md:h-24 text-rose-500/75 ml-auto'}/>
                                <div className="flex flex-col flex-grow justify-between space-y-6">
                                    <p className={'text-gray-500 font-light tracking-tight text-base md:text-xl'}>{item.comment}</p>
                                    <div className="flex space-x-3 items-center">
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                                            <Image src={item.avatar} alt={`deliverinc testimonial ${item.name}`} layout={"fill"} objectFit={"cover"} />
                                        </div>
                                        <div >
                                            <h2 className={'block font-semibold uppercase text-xl md:text-2xl text-red-500'}>{item.name}</h2>
                                            <p className={'font-light tracking-tight text-xs md:text-sm text-gray-500'}>{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}
