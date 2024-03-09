"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export function SearchBlock() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleClear = () => {
    setText("");
  };

  useEffect(() => {
    const down = (e) => {
      if (e.key === "п" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        console.log("П");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4" variant="secondary">
          <MagnifyingGlassIcon width={16} className="fill-gray-500 mr-2" />
          <span className="text-gray-400">Ctrl + п</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-[90%] mx-auto max-w-2xl"
        open={open}
        onOpenChange={setOpen}
      >
        <DialogHeader>
          <DialogTitle>Поиск</DialogTitle>
          <DialogDescription>Введите интересующий запрос</DialogDescription>
          <div className="flex gap-2 py-4 justify-end border-b border-custom">
            <div className="flex pointer-events-none">
              <MagnifyingGlassIcon width={16} className="fill-gray-500" />
            </div>
            <Input
              className="flex bg-transparent focus:none outline-none w-full"
              type="text"
              autoFocus={true}
              placeholder="Найти"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            {text && (
              <button
                className="items-end cursor-pointer"
                onClick={handleClear}
              >
                <IoClose size={24} />
              </button>
            )}
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Найти</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
