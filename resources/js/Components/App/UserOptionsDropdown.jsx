import {
    EllipsisVerticalIcon,
    LockOpenIcon,
    ShieldCheckIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function UserOptionsDropdown({ conversation }) {
    const changeUserRole = () => {
        console.log("changeUserRole");
        if (conversation.is_user) {
            return;
        }

        axios
            .post(route("user.changeRole", conversation.id))
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const onBlockUser = () => {
        console.log("BlockUser");
        if(!conversation.is_user) {
            return;
        }

        axios
            .post(route("user.blockUnBlock", conversation.id))
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/40">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-48 mt-2 rounded-md bg-gray-800 shadow-lg z-50">
                        <div className="p-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={onBlockUser}
                                        className={`${
                                            active
                                                ? "bg-black/30 text-white"
                                                : "text-gray-100"
                                        } group flex items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {conversation.is_blocked_at && (
                                            <>
                                                <LockOpenIcon className="w-5 h-5 mr-2" />
                                                UnBlock User
                                            </>
                                        )}
                                        {!conversation.is_blocked_at && (
                                            <>
                                                <LockOpenIcon className="w-5 h-5 mr-2" />
                                                Block User
                                            </>
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="p-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={changeUserRole}
                                        className={`${
                                            active
                                                ? "bg-black/30 text-white"
                                                : "text-gray-100"
                                        } group flex items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {conversation.is_admin && (
                                            <>
                                                <UserIcon className="w-5 h-5 mr-2" />
                                                Make Regular User
                                            </>
                                        )}
                                        {!conversation.is_admin && (
                                            <>
                                                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                                                Make Admin
                                            </>
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
