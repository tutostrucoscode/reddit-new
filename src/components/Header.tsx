import React from "react";
import Image from "next/image";
import { HomeIcon, ChevronDownIcon, MagnifyingGlassIcon, Bars4Icon } from "@heroicons/react/20/solid";
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, GlobeAmericasIcon, VideoCameraIcon, PlusIcon, MegaphoneIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://acortar.link/NgmbGU"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Caja de búsqueda */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
        <input type="text" placeholder="Search Reddit" className="flex-1 bg-transparent outline-none"/>
        <button type="submit" hidden/>
      </form>


      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon"/>
        <GlobeAmericasIcon className="icon"/>
        <VideoCameraIcon className="icon"/>
        <hr className="h-10 border border-gray-100"/>
        <ChatBubbleOvalLeftEllipsisIcon className="icon"/>
        <BellIcon className="icon"/>
        <PlusIcon className="icon"/>
        <MegaphoneIcon className="icon"/>
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars4Icon className="icon"/>
      </div>
    </div>
  );
};

export default Header;
