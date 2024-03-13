"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAllPosts } from "@/utils/fetchData";

export async function DeletePost(id) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const posts = await getAllPosts();

  const handleDelete = async (id) => {
    try {
      setOpen(false);
      router.push("/blog");
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Удалить</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Вы уверены, что хотите удалить пост?</DialogTitle>
          <DialogDescription>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Нет
            </Button>
            <Button type="submit" onClick={() => handleDelete(id)}>
              Да
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
