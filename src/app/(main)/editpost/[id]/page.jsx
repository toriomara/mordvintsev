"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { updatePost } from "@/libs/actions";
import { useRouter, useSearchParams } from "next/navigation";
import Tiptap from "@/components/Tiptap";

const formSchema = z.object({
  title: z.string().trim().min(5, {
    message: "Заголовок должен содержать не менее 2 символов",
  }),
  description: z.string().trim().min(10, {
    message: "Описание должен содержать не менее 10 символов",
  }),
  author: z.string().trim().min(2, {
    message: "Поле автор должно содержать не менее 10 символов",
  }),
  category: z.string(), // Validation by select a few SelectItem
  image: z.string().optional(),
  text: z.string().trim().min(2, {
    message: "Текст должен содержать не менее 100 символов",
  }),
});

export default function EditPostPage({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const text = searchParams.get("text");
  const author = searchParams.get("author");
  const category = searchParams.get("category");
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      image: image || "",
      text: text || "",
      author: author || "",
      category: category || "",
    },
  });
  
  const { formState } = form;
  const { isDirty, isValid, error } = formState;
  
  const onSubmit = (post) => {
    updatePost(post, params);
    router.push(`/blog/${params.id}`);
  };

  return (
    <div className="wrapper-main">
      <h1 className="title-section">Редактировать пост</h1>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                      // type="file"
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
                  <Tiptap {...field} content={text} />
                  <FormDescription>Добавьте текст поста</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={!isValid || !isDirty}>
              Сохранить
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
