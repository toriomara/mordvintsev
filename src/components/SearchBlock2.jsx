"use client";
// unused component

import { Suspense, useEffect, useState } from "react";
import { CommandDialog } from "@/components/ui/command";
import { Button } from "./ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { IoClose } from "react-icons/io5";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import SearchPage from "@/app/(main)/search/page";
import { SearchedPosts } from "./SearchedPosts";
import { ScrollArea } from "./ui/scroll-area";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Search from "./Search";
import { Loader } from "./ui/loader";
import { Table } from "./ui/table";
import SearchPage from "@/app/(main)/search/page";

export function SearchBlock2({ searchParams }) {
  const [open, setOpen] = useState(false);

  const query = searchParams?.query || "";

  useEffect(() => {
    const down = (e) => {
      if (e.ctrlKey && e.keyCode === 71) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        className="px-4 gray-900 border border-custom shadow"
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon width={16} className="fill-gray-500 mr-2" />
        <span className="text-gray-400">Ctrl + G</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle className="flex justify-center">Поиск</DialogTitle>
          <Search placeholder="Search" />
          <Suspense key={query} fallback={<Loader />}>
            {/* <SearchedPosts query={query} /> */}
          </Suspense>
        </DialogHeader>
      </CommandDialog>
    </>
  );
}
