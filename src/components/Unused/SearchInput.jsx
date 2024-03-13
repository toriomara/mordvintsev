// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import { useState, useEffect, useCallback } from "react";
// import { ModalSearch } from "./ModalSearch";

// export const SearchInput = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleChange = useCallback(() => {
//     setIsOpen(!isOpen);
//   });

//   useEffect(() => {
//     function closeByEscape(evt) {
//       if (evt.key === "Escape" || !evt.target.closest("#modal")) {
//         handleChange();
//       }
//     }

//     if (isOpen) {
//       document.addEventListener("keydown", closeByEscape);
//       document.addEventListener("mouseup", closeByEscape);

//       return () => {
//         document.removeEventListener("keydown", closeByEscape);
//         document.removeEventListener("mouseup", closeByEscape);
//       };
//     }
//   }, [handleChange, isOpen]);

//   useEffect(() => {
//     function handleOpenByKeys(evt) {
//       if (evt.ctrlKey && evt.keyCode === 75) {
//         evt.preventDefault();
//         handleChange();
//       }
//     }

//     document.addEventListener("keydown", handleOpenByKeys);

//     return () => {
//       document.removeEventListener("keydown", handleOpenByKeys);
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "unset";
//   }, [isOpen]);

//   return (
//     <>
//       <div className="justify-center flex">
//         <div className="relative flex items-center">
//           <div className="pointer-events-none absolute inset-y-0 left-0 flex pl-3">
//             <MagnifyingGlassIcon width={16} className="fill-gray-500" />
//           </div>
//           <input
//             type="text"
//             name="search"
//             id="search"
//             className="input-simple w-36 h-7 py-1.5 pl-9 pr-20 cursor-pointer sm:text-sm sm:leading-6"
//             placeholder="Ctrl + K"
//             onClick={handleChange}
//           />
//         </div>
//       </div>
//       {isOpen && <ModalSearch isOpen={isOpen} onClose={handleChange} />}
//     </>
//   );
// };
