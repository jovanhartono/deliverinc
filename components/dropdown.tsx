import {Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/solid";

interface DropdownProps {
    labelProps: string,
    options: string[],
    selectedKey: (value: string) => void
}

export default function Dropdown({labelProps, options, selectedKey}: DropdownProps) {
    const [buttonActive, setButtonActive] = useState<{ active: string }>({active: labelProps});
    const [dropdownState, setSelectedLabel] = useState<{ selectedLabel: string, touched: boolean }>({
        selectedLabel: labelProps,
        touched: false
    });

    return (
        <Menu as='div' className="relative w-full text-left appearance-none mt-auto">
            {({open}) => (
                <>
                    <Menu.Button
                        className={`${dropdownState.touched ? 'text-rose-500 border-rose-500 font-normal' : 'text-gray-900'} 
                        ${open && 'border-amber-500'}
                        description-card drop-shadow-sm flex w-full items-center border hover:border-amber-500 transition-colors duration-200 ease-in-out p-2 rounded focus:outline-none`}>
                        {dropdownState.selectedLabel}
                        <ChevronDownIcon className={`${open ? 'text-amber-500 transform rotate-180' : 'text-gray-900'} 
                        w-5 h-5 ml-auto basic-transition`}/>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-200"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="rounded overflow-hidden not-prose z-10 mt-2 left-0 right-0 absolute text-gray-900
                            bg-white shadow-md flex flex-col focus:outline-none max-h-40 overflow-y-scroll">
                            {options.map((option: string, index: number) => {
                                return (
                                    <Menu.Item key={index}>
                                        {({active}) => (
                                            <button type={"button"}
                                                    className={`${(buttonActive.active === option || active) &&
                                                    'flex items-center bg-gradient-to-r from-pink-500 to to-rose-500 text-white'}
                                                text-left px-2 py-2 text-sm font-light`}
                                                    onClick={() => {
                                                        setButtonActive({active: option})
                                                        setSelectedLabel({selectedLabel: option, touched: true})
                                                        selectedKey(option)
                                                    }}> {option} </button>
                                        )}
                                    </Menu.Item>
                                );
                            })}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
