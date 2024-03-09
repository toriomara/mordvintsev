"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { IoClose } from "react-icons/io5";

export const ModalSearch = ({ onClose }) => {
  return (
    <div className="fixed flex inset-0 h-screen w-screen justify-center items-center bg-neutral-800 bg-opacity-50 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl h-60 m-4 border border-custom bg-background rounded-lg shadow-lg"
        id="modal"
      >
        <div className="flex gap-2 p-4 justify-end border-b border-custom">
          <div className="flex pointer-events-none">
            <MagnifyingGlassIcon width={16} className="fill-gray-500" />
          </div>
          <input
            className="flex bg-transparent focus:none outline-none w-full"
            type="text"
            autoFocus={true}
            placeholder="Найти"
          />
          <button className="items-end cursor-pointer" onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>
        <div className="p-4">Search&apos;s results</div>
      </div>
    </div>
  );
};
