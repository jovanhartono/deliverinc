import {Disclosure} from "@headlessui/react";
import {MinusIcon, PlusIcon} from "@heroicons/react/outline";

export interface AccordionProps {
    accordionData: {
        title: string;
        description: string;
    }[];
}

export default function Accordion({accordionData}: AccordionProps) {
    return (
        <div className="w-full space-y-3">
            {
                accordionData.map((data: { title: string, description: string }, index: number) => {
                    return (
                        <Disclosure as={'div'} key={index} className={'bg-rose-50'}>
                            {({open}) => (
                                <>
                                    <Disclosure.Button
                                        className={`${open && 'bg-rose-100'} border border-rose-200 basic-transition text-left flex items-center justify-between w-full rounded-sm p-4 font-medium text-base lg:text-lg text-gray-700 hover:bg-rose-100`}>
                                            {data.title}
                                        <div className={'ml-3'}>
                                            {
                                                open ? <MinusIcon className={'w-6 h-6 text-gray-700'}/> : <PlusIcon className={'w-6 h-6 text-gray-700'}/>
                                            }

                                        </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className={`description-card p-3`}>
                                        {data.description}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    );
                })
            }
        </div>
    );
}
