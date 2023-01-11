import React from 'react'
import HeaderOption from './HeaderOption';
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
        {/* left */}
        <div className="flex space-x-6">
            {/* <p className="link">Settings</p> */}
                 <HeaderOption Icon={SearchIcon} title="All" selected />
                 <HeaderOption Icon={PhotographIcon} title="Image" />
                 <HeaderOption Icon={PlayIcon} title="Video" />
                 <HeaderOption Icon={NewspaperIcon} title="New" />
                 <HeaderOption Icon={MapIcon} title="Map" />
                 <HeaderOption Icon={DotsVerticalIcon} title="More" />
                 </div>
                 {/* Right */}
            <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
