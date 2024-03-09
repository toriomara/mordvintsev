"use client";

import { useEffect, useState } from "react";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SearchBlock() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleClear = () => {
    setText("");
  };

  useEffect(() => {
    const down = (e) => {
      if (e.key === "п" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <>
      <Button
        className="px-4 gray-900"
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon width={16} className="fill-gray-500 mr-2" />
        <span className="text-gray-400">Ctrl + П</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle>Поиск</DialogTitle>
          <DialogDescription>Введите интересующий запрос</DialogDescription>
          <div className="flex gap-2 py-4 justify-end border-b border-custom">
            <div className="flex pointer-events-none">
              <MagnifyingGlassIcon width={16} className="fill-gray-500" />
            </div>
            <Input
              className="flex bg-transparent focus:none outline-none w-full pr-2"
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
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <DialogFooter>
          <Button type="submit">Найти</Button>
        </DialogFooter>
      </CommandDialog>
    </>
  );
}
