import React from 'react'
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {

    const currentUser = true;

    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                {/* Left */}
                <div className="cursor-pointer h-24 w-24 relative lg:inline-grid">
                    <Image
                        src="https://yt3.ggpht.com/MqiGe7ceGA8xRDRJnzXbZvSVXSG5U-e0Lxs17A4_MGGMXo3QEp0_1kmu-D9ZkUvETCgcamAWoQ=s900-c-k-c0x00ffffff-no-rj"
                        layout="fill"
                        className="object-contain"
                    />
                </div>

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <SearchIcon className="h-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
                    />
                </div>

                <div className="flex space-x-4 items-center">
                    <HomeIcon className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                    {currentUser ? (
                        <>
                            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"/>
                            <img
                                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                                alt="user-image"
                                className="h-10 rounded-full cursor-pointer"
                            />
                        </>
                    ) : (
                        <button>Sign in</button>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Header