"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { createPost, updatePost } from "@/lib/actions";

const formSchema = z.object({
  // id: z.string(),
  title: z.string().min(5, {
    message: "Заголовок должен содержать не менее 5 символов",
  }),
  description: z.string().min(10, {
    message: "Описание должно содержать не менее 10 символов",
  }),
  image: z.string().url().optional(),
  text: z
    .string()
    .trim()
    .min(100, {
      author: z.string().min(5, {
        message: "Поле автор должно содержать не менее 5 символов",
      }),
    }),
  category: z.string(), // Validation select a few SelectItem
  message: "Текст должен содержать не менее 100 символов",
  // createdAt: z.string(),
  // updatedAt: z.string(),
});

// const FormSchema = formSchema.omit({
//   id: true,
//   createdAt: true,
//   updatedAt: true,
// });

export function PostForm({ setOpen, ...props }) {
  const post = props?.post;
  const isCreate = !post;
  const newPost = post?.post;

  console.log("update post 1 ===>", post.id);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // id: newPost?.id || "",
      title: newPost?.title || "",
      description: newPost?.description || "",
      image: newPost?.image || "",
      text: newPost?.text || "",
      author: newPost?.author || "",
      category: newPost?.category || "",
    },
  });

  const onSubmit = (newPost) => {
    setOpen(false);
    isCreate ? createPost(newPost) : updatePost(newPost);
    console.log("onSubmit newPostId ===>", newPost.id);
    console.log("update newPost 1 ===>", newPost);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-full max-w-md space-y-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID *</FormLabel>
              <FormControl>
                <Input placeholder="ID" {...field} />
              </FormControl>
              <FormDescription>Добавьте ID</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок *</FormLabel>
              <FormControl>
                <Input placeholder="Название поста" {...field} />
              </FormControl>
              <FormDescription>Добавьте заголовок</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание *</FormLabel>
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
              <FormDescription>Добавьте ссылку на изображение</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Текст *</FormLabel>
              <FormControl>
                <Textarea placeholder="Текст поста" {...field} />
              </FormControl>
              <FormDescription>Добавьте текст поста</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Автор *</FormLabel>
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
              <FormLabel>Категория *</FormLabel>
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
                  <SelectItem value="уголовные дела">Уголовные дела</SelectItem>
                  <SelectItem value="семейный адвокат">
                    Семейный адвокат
                  </SelectItem>
                </SelectContent>
                <FormDescription>Выберите категорию</FormDescription>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{isCreate ? "Добавить" : "Сохранить"}</Button>
      </form>
    </Form>
  );
}
