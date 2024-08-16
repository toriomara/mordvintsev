"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

export default function Search({ placeholder }) {
  const [text, setText] = useState("");
  const searchParams = useSearchParams("");
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="relative flex justify-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <MagnifyingGlassIcon className="relative left-8 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-gray-100 peer-focus:text-gray-500" />
      <Input
        className="peer block w-1/2 rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        type="search"
        onChange={handleInput}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
