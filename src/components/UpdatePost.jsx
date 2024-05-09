"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormSchema, updatePost } from "@/libs/actions";
import { PostForm } from "./PostForm";

// const formSchema = z.object({
//   title: z.string().min(2, {
//     message: 'Заголовок должен содержать не менее 2 символов',
//   }),
//   description: z.string().min(10, {
//     message: 'Описание должен содержать не менее 10 символов',
//   }),
//   author: z.string().min(2, {
//     message: 'Поле автор должно содержать не менее 10 символов',
//   }),
//   category: z.string(), // Validation by select a few SelectItem
//   image: z.string().optional(),
//   text: z.string().min(2, {
//     message: 'Текст должен содержать не менее 100 символов',
//   }),
// });

export function UpdatePost(post) {
  const [open, setOpen] = useState(false);
  // const router = useRouter();

  // console.log(id);

  // const onSubmit = (post) => {
  //   // setOpen(false);
  //   // updatePost(post);
  //   router.refresh();
  //   // router.refresh(`/posts/${post}`);
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Редактировать</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Добавить пост</DialogTitle>
          <DialogDescription>
            Поля, помеченные * обязательны для заполнения
          </DialogDescription>
        </DialogHeader>
        <PostForm
          setOpen={setOpen}
          post={post}
          // onSubmit={onSubmit}
        />
        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 w-full max-w-md space-y-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок</FormLabel>
                  <FormControl>
                    <Input placeholder="Название поста" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Input placeholder="Описание поста" {...field} />
                  </FormControl>
                  <FormDescription>Краткое содержание поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Автор</FormLabel>
                  <FormControl>
                    <Input placeholder="Автор поста" {...field} />
                  </FormControl>
                  <FormDescription>Добавьте своё имя</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Категория</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="административное право">
                        Административное право
                      </SelectItem>
                      <SelectItem value="уголовные дела">
                        Уголовные дела
                      </SelectItem>
                      <SelectItem value="семейный адвокат">
                        Семейный адвокат
                      </SelectItem>
                    </SelectContent>
                    <FormDescription>
                      This is your public display name
                    </FormDescription>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Изображение</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Добавьте изображение"
                      // type='file'
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Текст поста" {...field} />
                  </FormControl>
                  <FormDescription>Добавьте текст поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Сохранить</Button>
          </form>
        </Form> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Закрыть
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
