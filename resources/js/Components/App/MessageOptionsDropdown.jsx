import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon, ShieldCheckIcon, TrashIcon, UserIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Fragment } from "react";


export default function UserOptionsDropdown({ message }){

    const onMessageDelete = () => {
        console.log("Delete message");

        axios
            .delete(route("message.destroy", message.id))
            .then((res) => {
                emit('message.deleted', message);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="absolute right-full text-gray-100 top-1/2 -translate-y-1/2">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-black 40">
                        <EllipsisVerticalIcon  className="h-5 w-5"/>
                    </Menu.Button>
                </div>
                <Transition 
                    as={Fragment} 
                    enter="transition ease-out duration-100" 
                    enterFrom="transform opacity-0 scale-95" 
                    enterTo="transform opacity-100 scale-100" 
                    leave="transition east-in duration-75" 
                    leaveFrom="transform opacity-100 scale-100">
                    
                    <Menu.Items className="absolute left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg z-50">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button onClick={onMessageDelete} 
                                        className={`${
                                            active ? "bg-black/30 text-white"
                                            : "text-gray-100"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            <TrashIcon className="w-4 h-4 mr-2" />
                                            Delete
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                                </div>
                            </Menu.Items>
                        </Transition>
            </Menu>
                </div>
            )
        }