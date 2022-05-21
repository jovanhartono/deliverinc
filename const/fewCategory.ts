import {ComponentProps} from "react";
import {BeakerIcon, CakeIcon, CogIcon, ColorSwatchIcon, DeviceMobileIcon, TagIcon} from "@heroicons/react/solid";

type HeroIcon = (props: ComponentProps<'svg'>) => JSX.Element;

export type Category = {
    icon: HeroIcon,
    title: string,
};

export const FewCategory: Category[] = [
    {
        icon: TagIcon,
        title: 'Pakaian',
    },
    {
        icon: BeakerIcon,
        title: 'Kimia',
    },
    {
        icon: DeviceMobileIcon,
        title: 'Aksesoris HP',
    },
    {
        icon: CakeIcon,
        title: 'Makanan',
    },
    {
        icon: CogIcon,
        title: 'Mesin',
    },
    {
        icon: ColorSwatchIcon,
        title: 'Kosmetik',
    },
];
